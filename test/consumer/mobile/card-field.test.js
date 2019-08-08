import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CardField from '../../../components/consumer/mobile/card-field';
import Cards from '../../../components/consumer/mobile/card-field/cards';

describe('card field', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<CardField />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-card-field')).to.be.true;
  });

  it('should have label', () => {
    const labelText = 'text';
    const wrapper = shallow(<CardField label={labelText} />);
    const label = wrapper.find('.pbg-mobile-label-normal');
    expect(label.length).to.equal(1);
    expect(label.text()).to.equal(labelText);
  });

  it('should render cards', () => {
    const labelText = 'text';

    const wrapper = shallow(<CardField label={labelText} />);
    const cards = wrapper.find(Cards);
    expect(cards.length).to.equal(1);
  });

  it('should render only allowed types', () => {
    const labelText = 'text';

    const wrapper = shallow(<CardField label={labelText} allowedCardTypes={['visa', 'master']} />);
    const cards = wrapper.find(Cards);
    const icons = cards.dive().find('.pbg-card');

    expect(cards.length).to.equal(1);
    expect(icons.length).to.equal(2);
    expect(icons.first().hasClass('pbg-icon-visa-small')).to.be.true;
    expect(icons.at(1).hasClass('pbg-icon-mastercard-small')).to.be.true;
  });

  it('should render all allowed types', () => {
    const wrapper = shallow(
      <CardField label="Label" allowedCardTypes={['visa', 'master', 'american_express', 'discover', 'diners_club']} />
    );
    const cards = wrapper.find(Cards);
    const icons = cards.dive().find('.pbg-card');

    expect(icons.length).to.equal(5);
    expect(cards.html()).to.include('pbg-icon-visa-small');
    expect(cards.html()).to.include('pbg-icon-mastercard-small');
    expect(cards.html()).to.include('pbg-icon-amex-small');
    expect(cards.html()).to.include('pbg-icon-discover-small');
    expect(cards.html()).to.include('pbg-icon-diners-club-small');
  });
});
