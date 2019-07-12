import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CardField from '../../../components/consumer/desktop/card-field';
import Cards from '../../../components/consumer/desktop/card-field/cards';
import CardPlaceholder from '../../../components/consumer/desktop/card-field/card-placeholder';

describe('card field', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<CardField />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-card-field')).to.be.true;
  });

  it('should have label', () => {
    const labelText = 'text';
    const wrapper = shallow(<CardField label={labelText} />);
    const label = wrapper.find('.pbg-desktop-label-normal');
    expect(label.length).to.equal(1);
    expect(label.text()).to.equal(labelText);
  });

  it('should render cards', () => {
    const labelText = 'text';

    const wrapper = shallow(<CardField label={labelText} />);
    const cards = wrapper.find(Cards);
    expect(cards.length).to.equal(1);
  });

  it('should render placeholder card', () => {
    const labelText = 'text';

    const wrapper = shallow(<CardField label={labelText} />);
    const placeholder = wrapper.find(CardPlaceholder);
    expect(placeholder.length).to.equal(1);
  });

  it('should render only allowed types', () => {
    const labelText = 'text';

    const wrapper = shallow(<CardField label={labelText} allowedCardTypes={['visa', 'master']} />);
    const cards = wrapper.find(Cards);
    const icons = cards.dive().find('.pbg-card');

    expect(cards.length).to.equal(1);
    expect(icons.length).to.equal(2);
    expect(icons.first().hasClass('pbg-visa-card')).to.be.true;
    expect(icons.at(1).hasClass('pbg-master-card')).to.be.true;
  });

  it('should show visa card type', () => {
    const labelText = 'text';

    const wrapper = shallow(<CardField label={labelText} cardType="visa" />);
    const placeholder = wrapper.find(CardPlaceholder);
    const icon = placeholder.dive().find('.pbg-placeholder-icon');

    expect(icon.hasClass('pbg-visa-card')).to.be.true;
  });

  it('should show master card type', () => {
    const labelText = 'text';

    const wrapper = shallow(<CardField label={labelText} cardType="master" />);
    const placeholder = wrapper.find(CardPlaceholder);
    const icon = placeholder.dive().find('.pbg-placeholder-icon');

    expect(icon.hasClass('pbg-master-card')).to.be.true;
  });

  it('should show american_express card type', () => {
    const labelText = 'text';

    const wrapper = shallow(<CardField label={labelText} cardType="american_express" />);
    const placeholder = wrapper.find(CardPlaceholder);
    const icon = placeholder.dive().find('.pbg-placeholder-icon');

    expect(icon.hasClass('pbg-amex-card')).to.be.true;
  });

  it('should show discover card type', () => {
    const labelText = 'text';

    const wrapper = shallow(<CardField label={labelText} cardType="discover" />);
    const placeholder = wrapper.find(CardPlaceholder);
    const icon = placeholder.dive().find('.pbg-placeholder-icon');

    expect(icon.hasClass('pbg-discover-card')).to.be.true;
  });

  it('should show diners_club card type', () => {
    const labelText = 'text';

    const wrapper = shallow(<CardField label={labelText} cardType="diners_club" />);
    const placeholder = wrapper.find(CardPlaceholder);
    const icon = placeholder.dive().find('.pbg-placeholder-icon');

    expect(icon.hasClass('pbg-dinners-club-card')).to.be.true;
  });

  it('should show default card type', () => {
    const labelText = 'text';

    const wrapper = shallow(<CardField label={labelText} />);
    const placeholder = wrapper.find(CardPlaceholder);
    const icon = placeholder.dive().find('.pbg-placeholder-icon');

    expect(icon.hasClass('pbg-default-placeholder-icon')).to.be.true;
  });
});
