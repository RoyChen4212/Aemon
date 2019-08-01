import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Switcher from '../../../components/consumer/mobile/switcher';
import SwitcherItem from '../../../components/consumer/mobile/switcher/switcher-item';
import CornerCheckmark from '../../../components/consumer/mobile/switcher/corner-checkmark';

describe('switcher', () => {
  const switcherOptions = [
    {
      label: 'Option1',
      hint: 'hint for option 1',
      value: 'option1',
    },
    {
      label: 'Option2',
      hint: 'hint for option 1',
      value: 'option2',
    },
  ];

  it('should have correct class names', () => {
    const wrapper = shallow(<Switcher options={switcherOptions} />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-switcher')).to.be.true;
  });

  it('should have correct number of options', () => {
    const wrapper = shallow(<Switcher options={switcherOptions} />);
    expect(wrapper.find(SwitcherItem).length).to.equal(2);
  });

  it('should display active item', () => {
    const wrapper = mount(<Switcher options={switcherOptions} value="option1" />);
    expect(wrapper.find('.pbg-switcher-item-label').find('.pbg-mobile-label-strong')).have.lengthOf(1);
    expect(wrapper.find(CornerCheckmark)).have.lengthOf(1);
  });

  it('should react onChange correctly', () => {
    const onChange = sinon.spy();

    const wrapper = shallow(<Switcher options={switcherOptions} onChange={onChange} />);
    const item = wrapper.find(SwitcherItem);
    item
      .first()
      .dive()
      .find('.pbg-switcher-item')
      .simulate('click');

    expect(onChange.calledOnce).to.be.true;
    expect(onChange.calledWith(switcherOptions[0].value)).to.be.true;
  });
});
