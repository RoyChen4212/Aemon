import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import { Checkbox } from '../../../components/consumer/desktop/checkbox';
import PasswordField from '../../../components/consumer/desktop/password-field';
import GuestPasswordField from '../../../components/consumer/desktop/guest-password-field';

describe('password-field', () => {
  it('should have correct class name', () => {
    const wrapper = shallow(<GuestPasswordField />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-guest-password-field')).to.be.true;
  });

  it('should render PasswordField component', () => {
    const wrapper = shallow(<GuestPasswordField />);
    expect(wrapper.find(PasswordField)).to.have.lengthOf(1);
  });

  it('should show a hint text when given', () => {
    const hint = 'a hint';
    const wrapper = shallow(<GuestPasswordField hint={hint} />);
    expect(wrapper.html()).to.include(hint);
  });

  it('should render a Checkbox when hint is given', () => {
    const hint = 'a hint';
    const wrapper = shallow(<GuestPasswordField hint={hint} />);
    expect(wrapper.find(Checkbox)).to.have.lengthOf(1);
  });

  it('should disable the PasswordField when checkbox is checked', () => {
    const hint = 'a hint';
    const wrapper = mount(<GuestPasswordField hint={hint} />);
    const event = { target: { checked: true } };
    wrapper.find({ type: 'checkbox' }).simulate('change', event);
    expect(wrapper.find({ type: 'password' }).prop('disabled')).to.equal(true);
  });

  it('should set the password input value', () => {
    const hint = 'a hint';
    const wrapper = mount(<GuestPasswordField hint={hint} value={{ password: 'secret' }} />);
    expect(wrapper.find({ type: 'password' }).prop('value')).to.equal('secret');
  });

  it('should set the checkbox value', () => {
    const hint = 'a hint';
    const wrapper = mount(<GuestPasswordField hint={hint} value={{ guest: true }} />);
    expect(wrapper.find({ type: 'checkbox' }).prop('checked')).to.equal(true);
  });

  it('should preserve password afer blur event', () => {
    const wrapper = mount(<GuestPasswordField value={{ password: 'secret' }} />);
    const input = wrapper.find('input');
    input.simulate('focus');
    input.simulate('blur');
    expect(input.instance().value).to.equal('secret');
  });
});
