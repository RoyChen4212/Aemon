import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import PasswordField from '../../../components/consumer/desktop/password-field';
import Hint from '../../../components/consumer/desktop/hint';
import { shouldBehaveLikeTextField } from './text-field.test';

describe('password-field', () => {
  shouldBehaveLikeTextField(shallow(<PasswordField />));

  it('should have correct class name', () => {
    const wrapper = shallow(<PasswordField />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-password-field')).to.be.true;
  });

  it('should have type password on input element', () => {
    const wrapper = shallow(<PasswordField />);
    expect(wrapper.find('input').html()).to.include(`type="password"`);
  });

  it('should have forgot password label', () => {
    const wrapper = shallow(<PasswordField forgotPasswordText="Forgot?" />);
    expect(wrapper.find('.pbg-password-field-header').find(Hint)).to.have.lengthOf(1);
  });

  it('should show a hint when given', () => {
    const expected = 'a hint';
    const wrapper = shallow(<PasswordField hint={expected} />);
    expect(wrapper.contains(<Hint>{expected}</Hint>)).to.be.true;
  });

  it('should call onForgotPassword when forgot password is clicked', () => {
    const onForgotPassword = sinon.spy();
    const wrapper = shallow(<PasswordField forgotPasswordText="Forgot?" onForgotPassword={onForgotPassword} />);
    wrapper
      .find('.pbg-password-field-header')
      .find(Hint)
      .simulate('click');
    expect(onForgotPassword.calledOnce).to.be.true;
  });
});
