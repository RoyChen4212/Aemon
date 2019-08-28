import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import LoginSeparator from '../../../components/consumer/mobile/login-separator';

describe('login-separator', () => {
  it('should have correct class names', () => {
    const label = "label";
    const wrapper = shallow(<LoginSeparator label={label} />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-login-separator')).to.be.true;
    expect(wrapper.find('.pbg-mobile-label-normal').text()).to.equal(label);
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<LoginSeparator className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });
});
