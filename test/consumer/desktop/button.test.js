import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { CLASS_NAME } from '../../../components/consumer/shared/base-button';
import { PrimaryButton } from '../../../components/consumer/desktop/button';
import { shouldBehaveLikeButton } from '../shared/base-button.test';

describe('Button', () => {
  describe('Primary button', () => {
    shouldBehaveLikeButton(shallow(<PrimaryButton />));

    it('should have correct class name', () => {
      const wrapper = shallow(<PrimaryButton />);
      expect(wrapper.find('button').hasClass('pbg-button-primary')).to.be.true;
      expect(wrapper.find('button').hasClass(CLASS_NAME)).to.be.true;
    });

    it('should have a correct desktop class name', () => {
      const wrapper = shallow(<PrimaryButton />);
      expect(wrapper.find('button').hasClass('pbg-consumer-desktop')).to.be.true;
    });
  });
});
