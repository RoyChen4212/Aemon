import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import {
  PrimaryButton, SecondaryButton, SmallButton, LinkButton, FacebookButton, SmallFacebookButton,
} from '../../components/varys-mobile/button';
import Button from '../../components/varys-mobile/button/button';
import Hint from '../../components/varys-mobile/hint';

describe('Button', () => {
  describe('Base Button', () => {
    it('should render a button tag', () => {
      const wrapper = shallow(<Button />);
      expect(wrapper.find('button')).to.have.lengthOf(1);
    });

    it('should have correct class name', () => {
      const wrapper = shallow(<Button />);
      expect(wrapper.find('button').hasClass('pbg-button')).to.be.true;
    });

    it('should add disabled class when disabled prop is present', () => {
      const wrapper = shallow(<Button disabled />);
      expect(wrapper.find('button').hasClass('disabled')).to.be.true;
    });

    it('should render correct text', () => {
      const expected = 'some text';
      const wrapper = shallow(<Button>{expected}</Button>)
      expect(wrapper.find('button').text()).to.equal(expected);
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
      const wrapper = shallow(<Button onClick={() => {}} />);
      expect(wrapper.find('button').html()).to.include('type="button"');
    });

    it('should have type submit if click handler is not given', () => {
      const wrapper = shallow(<Button />);
      expect(wrapper.find('button').html()).to.include('type="submit"');
    });

    it('should render hint if provided', () => {
      const expected = 'Hint';
      const wrapper = shallow(<Button hint={expected}>Button</Button>);
      expect(wrapper.contains(<Hint>{expected}</Hint>)).to.be.true;
    });

    it('should not render hint if not provided', () => {
      const wrapper = shallow(<Button>Button</Button>);
      expect(wrapper.html()).to.not.include('<span class="pbg-hint">');
    });
  });

  describe('Primary button', () => {
    it('should have correct class name', () => {
      const wrapper = shallow(<PrimaryButton />);
      expect(wrapper.find(Button).hasClass('pbg-button-primary')).to.be.true;
    });
  });

  describe('Secondary button', () => {
    it('should have correct class name', () => {
      const wrapper = shallow(<SecondaryButton />);
      expect(wrapper.find(Button).hasClass('pbg-button-secondary')).to.be.true;
    });
  });

  describe('Small button', () => {
    it('should have correct class name', () => {
      const wrapper = shallow(<SmallButton />);
      expect(wrapper.find(Button).hasClass('pbg-button-small')).to.be.true;
    });
  });

  describe('Link button', () => {
    it('should have correct class name', () => {
      const wrapper = shallow(<LinkButton />);
      expect(wrapper.find(Button).hasClass('pbg-button-link')).to.be.true;
    });
  });

  describe('Facebook button', () => {
    it('should have correct class name', () => {
      const wrapper = shallow(<FacebookButton />);
      expect(wrapper.find(Button).hasClass('pbg-button-facebook')).to.be.true;
    });
  });

  describe('Small Facebook button', () => {
    it('should have correct class name', () => {
      const wrapper = shallow(<SmallFacebookButton />);
      expect(wrapper.find(Button).hasClass('pbg-button-facebook-small')).to.be.true;
    });
  });
});