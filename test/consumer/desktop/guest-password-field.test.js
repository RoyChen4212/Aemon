import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';

import Checkbox from '../../../components/consumer/desktop/checkbox';
import PasswordField from '../../../components/consumer/desktop/password-field';
import GuestPasswordField from '../../../components/consumer/desktop/guest-password-field';

describe('guest-password-field', () => {
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
    const wrapper = mount(<GuestPasswordField hint={hint} value={{ guest: true }} />);
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

  it('should update value with password', function test(done) {
    const expected = 'some password';
    const onChange = ev => {
      expect(ev.target.value).to.eql({ guest: false, password: expected });
      done();
    };
    const wrapper = mount(<GuestPasswordField value={{ guest: false }} onChange={onChange} />);
    wrapper.find({ type: 'password' }).simulate('change', { target: { value: expected } });
  });

  it('should update value with checkbox', () => {
    const hint = 'a hint';
    const onChange = sinon.spy();
    const wrapper = mount(<GuestPasswordField hint={hint} value={{ guest: false }} onChange={onChange} />);
    const event = { target: { checked: true } };
    wrapper.find({ type: 'checkbox' }).simulate('change', event);
    expect(onChange.calledOnce).to.be.true;
  });

  it('should not render checkbox when error', () => {
    const hint = 'a hint';
    const wrapper = mount(<GuestPasswordField hint={hint} error="error" value={{ guest: true }} />);
    expect(wrapper.find({ type: 'checkbox' })).to.have.lengthOf(0);
  });

  it('should render checkbox checked and disabled and field disabled when disabled', () => {
    const hint = 'a hint';
    const wrapper = mount(<GuestPasswordField hint={hint} value={{ guest: false }} disabled />);
    expect(wrapper.find({ type: 'checkbox' }).prop('disabled')).to.be.true;
    expect(wrapper.find({ type: 'password' }).prop('disabled')).to.equal(true);
  });

  it('should preserve password afer blur event', () => {
    const wrapper = mount(<GuestPasswordField value={{ password: 'secret' }} />);
    const input = wrapper.find('input');
    input.simulate('focus');
    input.simulate('blur');
    expect(input.instance().value).to.equal('secret');
  });
});
