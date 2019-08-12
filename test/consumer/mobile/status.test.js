import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Status from '../../../components/consumer/mobile/status';
import { iconTypes } from '../../../components/consumer/shared/icon-types';

describe('status', () => {
  const label = 'label';
  const value = 'value';
  const tooltip = 'tooltip';

  it('should have correct class names', () => {
    const wrapper = shallow(<Status label={label} value={value} iconType={iconTypes.PRICE_TAG} tooltip={tooltip} />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-status')).to.be.true;
  });

  it('should have correct label, value and tooltip when they provided', () => {
    const wrapper = shallow(<Status label={label} value={value} iconType={iconTypes.PRICE_TAG} tooltip={tooltip} />);
    expect(wrapper.find('.pbg-mobile-small-normal').text()).to.equal(label);
    expect(wrapper.find('.pbg-mobile-label-normal').text()).to.equal(value);
    expect(wrapper.find('.pbg-icon-link-question-mark-blue').length).to.equal(1);
  });

  it('should not have tooltip when its not provided', () => {
    const wrapper = shallow(<Status label={label} value={value} iconType={iconTypes.PRICE_TAG} />);
    expect(wrapper.find('.pbg-mobile-small-normal').text()).to.equal(label);
    expect(wrapper.find('.pbg-mobile-label-normal').text()).to.equal(value);
    expect(wrapper.find('.pbg-icon-link-question-mark-blue').length).to.equal(0);
  });
});
