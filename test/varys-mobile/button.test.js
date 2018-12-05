import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import {
  PrimaryButton, //SecondaryButton, SmallButton, LinkButton, FacebookButton,
} from '../../components/varys-mobile/button';
import Hint from '../../components/varys-mobile/hint';

describe('Button', () => {
  describe('Primary button', () => {
    it('should render a button tag when using PrimaryButton', () => {
      const wrapper = shallow(<PrimaryButton />);
      expect(wrapper.find('button')).to.have.lengthOf(1);
    });

    it('should render correct text', () => {
      const expected = 'some text';
      const wrapper = shallow(<PrimaryButton>{expected}</PrimaryButton>)
      expect(wrapper.find('button').text()).to.equal(expected);
    });

    it('should have correct class name', () => {
      const wrapper = shallow(<PrimaryButton />);
      expect(wrapper.find('button').hasClass('pbg-button')).to.be.true;
      expect(wrapper.find('button').hasClass('pbg-button-primary')).to.be.true;
    });

    it('should add disabled class when disabled prop is present', () => {
      const wrapper = shallow(<PrimaryButton disabled />);
      expect(wrapper.find('button').hasClass('disabled')).to.be.true;
    });

    it('should execute click handler if given', () => {
      const onClick = sinon.spy();
      const wrapper = shallow(<PrimaryButton onClick={onClick} />);
      wrapper.find('button').simulate('click');
      expect(onClick.calledOnce).to.be.true;
    });

    it('should not execute click handler if given but disabled', () => {
      const onClick = sinon.spy();
      const wrapper = shallow(<PrimaryButton disabled onClick={onClick} />);
      wrapper.find('button').simulate('click');
      expect(onClick.calledOnce).to.be.false;
    });

    it('should have type button if click handler is given', () => {
      const wrapper = shallow(<PrimaryButton onClick={() => {}} />);
      expect(wrapper.find('button').html()).to.include('type="button"');
    });

    it('should have type submit if click handler is not given', () => {
      const wrapper = shallow(<PrimaryButton />);
      expect(wrapper.find('button').html()).to.include('type="submit"');
    });

    it('should render hint if provided', () => {
      const expected = 'Hint';
      const wrapper = shallow(<PrimaryButton hint={expected}>Button</PrimaryButton>);
      expect(wrapper.contains(<Hint>{expected}</Hint>)).to.be.true;
    });

    it('should not render hint if not provided', () => {
      const wrapper = shallow(<PrimaryButton>Button</PrimaryButton>);
      expect(wrapper.html()).to.not.include('<span class="pbg-hint">');
    });
  });
});