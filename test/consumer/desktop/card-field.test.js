import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import CardField from '../../../components/consumer/desktop/card-field';
import BaseLabel from '../../../components/consumer/shared/base-label';
import Cards from '../../../components/consumer/desktop/card-field/cards';

describe('card field', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<CardField />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-card-field')).to.be.true;
  });

  it('should have label', () => {
    const wrapper = shallow(<CardField />);
    const label = wrapper.find(BaseLabel);
    expect(label.length).to.equal(1);
  });

  it('should render cards', () => {
    const wrapper = shallow(<CardField />);
    const cards = wrapper.find(Cards);
    expect(cards.length).to.equal(1);
  });

  it('should render placeholder card', () => {
    const wrapper = shallow(<CardField />);
    const placeholder = wrapper.find('.pgb-placeholder-icon');
    expect(placeholder.length).to.equal(1);
  });
});
