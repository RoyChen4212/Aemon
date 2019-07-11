import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import PasswordField from '../../../components/consumer/mobile/password-field';
import { shouldBehaveLikeTextField } from './text-field.test';

describe('PasswordField', () => {
  shouldBehaveLikeTextField(shallow(<PasswordField />));

  it('should have correct class name', () => {
    const wrapper = shallow(<PasswordField />);
    expect(wrapper.hasClass('pbg-password-field')).to.be.true;
  });

  it('should have forgot password label', () => {
    const wrapper = shallow(<PasswordField forgotPasswordText="Forget?" />);
    expect(wrapper.find('.pbg-forgot-password-container').find('.pbg-mobile-hint-clickable')).to.have.lengthOf(1);
  });

  it('should show a hint when given', () => {
    const expected = 'a hint';
    const wrapper = shallow(<PasswordField hint={expected} />);
    expect(wrapper.find('.pbg-mobile-hint-normal').text()).to.equal(expected);
  });

  it('should call onForgotPassword when forgot password is clicked', () => {
    const onForgotPassword = sinon.spy();
    const wrapper = shallow(<PasswordField onForgotPassword={onForgotPassword} forgotPasswordText="Forget?" />);
    wrapper.find('.pbg-mobile-hint-clickable').simulate('click');
    expect(onForgotPassword.calledOnce).to.be.true;
  });

  it('should execute onBlur when clicked out of input', () => {
    const onBlur = sinon.spy();
    const wrapper = shallow(<PasswordField onBlur={onBlur} />);
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');
    expect(onBlur.calledOnce).to.be.true;
  });

  describe('With error', () => {
    it('should show an error hint when error is given', () => {
      const expected = 'a horrible error';
      const wrapper = shallow(<PasswordField error={expected} />);
      expect(wrapper.find('.pbg-mobile-hint-error').text()).to.equal(expected);
    });

    it('should have correct class when error is given', () => {
      const wrapper = shallow(<PasswordField error="an error" />);
      expect(wrapper.hasClass('pbg-form-field-error')).to.be.true;
    });

    it('should show an error over a hint when error is given', () => {
      const expected = 'a horrible error';
      const hint = 'nope';
      const wrapper = shallow(<PasswordField error={expected} hint={hint} />);
      expect(wrapper.find('.pbg-mobile-hint-error').text()).to.equal(expected);
    });

    it('should show an error label when error is given', () => {
      const expected = 'A label';
      const wrapper = shallow(<PasswordField error="and error" label={expected} />);
      expect(wrapper.find('.pbg-mobile-paragraph-error').text()).to.equal(expected);
    });

    it('should have type password on input element', () => {
      const wrapper = shallow(<PasswordField />);
      expect(wrapper.find('input').html()).to.include(`type="password"`);
    });
  });
});
