import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button, { PrimaryButton } from '../../../components/consumer/desktop/button';

describe('Button', () => {
  describe('Base Button', () => {
    it('should render a button tag', () => {
      const wrapper = shallow(<Button />);
      expect(wrapper.find('button')).to.have.lengthOf(1);
    });

    it('should have a correct class name', () => {
      const wrapper = shallow(<Button />);
      expect(wrapper.find('button').hasClass('pbg-button')).to.be.true;
    });

    it('should add disabled class when disabled prop is present', () => {
      const wrapper = shallow(<Button disabled />);
      expect(wrapper.find('button').hasClass('disabled')).to.be.true;
    });

    it('should render correct text', () => {
      const text = 'text';
      const wrapper = shallow(<Button>{text}</Button>);
      expect(wrapper.find('button').text()).to.equal(text);
    });

    it('should execute click handler if given', () => {
      const onClick = sinon.spy();
      const wrapper = shallow(<Button onClick={onClick} />);
      wrapper.find('button').simulate('click');
      expect(onClick.calledOnce).to.be.true;
    });

    it('should not execute click handler if given but disabled', () => {
      const onClick = sinon.spy();
      const wrapper = shallow(<Button disabled onClick={onClick} />);
      wrapper.find('button').simulate('click');
      expect(onClick.calledOnce).to.be.false;
    });

    it('should have type button if click handler is given', () => {
      const wrapper = shallow(<Button onClick={() => { }} />);
      expect(wrapper.find('button').html()).to.include('type="button');
    });

    it('should have type submit if click handler is not given', () => {
      const wrapper = shallow(<Button />);
      expect(wrapper.find('button').html()).to.include('type="submit');
    });
  });

  describe('Primary button', () => {
    it('should have correct class name', () => {
      const wrapper = shallow(<PrimaryButton />);
      expect(wrapper.find(Button).hasClass('pbg-button-primary')).to.be.true;
    });

    it('should have a correct desktop class name', () => {
      const wrapper = shallow(<PrimaryButton />);
      expect(wrapper.find(Button).hasClass('pbg-consumer-desktop')).to.be.true;
    });
  });
}); 