import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { shouldBehaveLikeButton } from '../shared/base-button.test';
import {
  PrimaryButton,
  SecondaryButton,
  SmallButton,
  LinkButton,
  FacebookButton,
  SmallFacebookButton,
} from '../../../components/consumer/mobile/button';

describe('Button', () => {
  describe('Primary button', () => {
    shouldBehaveLikeButton(shallow(<PrimaryButton />));

    it('should have correct class name', () => {
      const wrapper = shallow(<PrimaryButton />);
      expect(wrapper.find('button').hasClass('pbg-button')).to.be.true;
      expect(wrapper.find('button').hasClass('pbg-button-primary')).to.be.true;
    });

    it('should have a className if provided', () => {
      const className = 'className';
      const wrapper = shallow(<PrimaryButton className={className} />);

      expect(wrapper.find('button').hasClass(className)).to.be.true;
    });

    it('should have correct class name for mobile', () => {
      const wrapper = shallow(<PrimaryButton />);
      expect(wrapper.find('button').hasClass('pbg-consumer-mobile')).to.be.true;
    });
  });

  describe('Secondary button', () => {
    shouldBehaveLikeButton(shallow(<SecondaryButton />));

    it('should have correct class name', () => {
      const wrapper = shallow(<SecondaryButton />);
      expect(wrapper.find('button').hasClass('pbg-button-secondary')).to.be.true;
    });

    it('should have a className if provided', () => {
      const className = 'className';
      const wrapper = shallow(<SecondaryButton className={className} />);

      expect(wrapper.find('button').hasClass(className)).to.be.true;
    });

    it('should have correct class name for mobile', () => {
      const wrapper = shallow(<SecondaryButton />);
      expect(wrapper.find('button').hasClass('pbg-consumer-mobile')).to.be.true;
    });
  });

  describe('Small button', () => {
    shouldBehaveLikeButton(shallow(<SmallButton />));

    it('should have correct class name', () => {
      const wrapper = shallow(<SmallButton />);
      expect(wrapper.find('button').hasClass('pbg-button-small')).to.be.true;
    });

    it('should have a className if provided', () => {
      const className = 'className';
      const wrapper = shallow(<SmallButton className={className} />);

      expect(wrapper.find('button').hasClass(className)).to.be.true;
    });

    it('should have correct class name for mobile', () => {
      const wrapper = shallow(<SmallButton />);
      expect(wrapper.find('button').hasClass('pbg-consumer-mobile')).to.be.true;
    });
  });

  describe('Link button', () => {
    shouldBehaveLikeButton(shallow(<LinkButton />));
    it('should have correct class name', () => {
      const wrapper = shallow(<LinkButton />);
      expect(wrapper.find('button').hasClass('pbg-button-link')).to.be.true;
    });

    it('should have a className if provided', () => {
      const className = 'className';
      const wrapper = shallow(<LinkButton className={className} />);

      expect(wrapper.find('button').hasClass(className)).to.be.true;
    });

    it('should have correct class name for mobile', () => {
      const wrapper = shallow(<LinkButton />);
      expect(wrapper.find('button').hasClass('pbg-consumer-mobile')).to.be.true;
    });
  });

  describe('Facebook button', () => {
    shouldBehaveLikeButton(shallow(<FacebookButton />));

    it('should have correct class name', () => {
      const wrapper = shallow(<FacebookButton />);
      expect(wrapper.find('button').hasClass('pbg-button-facebook')).to.be.true;
    });

    it('should have a className if provided', () => {
      const className = 'className';
      const wrapper = shallow(<FacebookButton className={className} />);

      expect(wrapper.find('button').hasClass(className)).to.be.true;
    });

    it('should have correct class name for mobile', () => {
      const wrapper = shallow(<FacebookButton />);
      expect(wrapper.find('button').hasClass('pbg-consumer-mobile')).to.be.true;
    });
  });

  describe('Small Facebook button', () => {
    shouldBehaveLikeButton(shallow(<SmallFacebookButton />));

    it('should have correct class name', () => {
      const wrapper = shallow(<SmallFacebookButton />);
      expect(wrapper.find('button').hasClass('pbg-button-facebook-small')).to.be.true;
    });

    it('should have a className if provided', () => {
      const className = 'className';
      const wrapper = shallow(<SmallFacebookButton className={className} />);

      expect(wrapper.find('button').hasClass(className)).to.be.true;
    });

    it('should have correct class name for mobile', () => {
      const wrapper = shallow(<SmallFacebookButton />);
      expect(wrapper.find('button').hasClass('pbg-consumer-mobile')).to.be.true;
    });
  });
});
