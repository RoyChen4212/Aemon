import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import FacebookInput from '../../../components/consumer/desktop/facebook-input';
import {FacebookButton} from "../../../components/consumer/desktop/button";



describe('facebook-input', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<FacebookInput />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-facebook-input')).to.be.true;
  });

  it('should have correct text', () => {
    const wrapper = shallow(<FacebookInput />);
    const facebookButton = wrapper.find(FacebookButton);
    expect(facebookButton.dive().find("span").text()).to.equal('Continue with Facebook');
  });

  it('should have correct hint', () => {
    const wrapper = shallow(<FacebookInput />);
    const hint = wrapper.find(".pbg-desktop-secondary-text");
    expect(hint.text()).to.equal('You previously logged in with Facebook. Please click to authenticate again.');
  });

  it('should be clickable', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<FacebookInput onClick={onClick} />);
    wrapper.find(FacebookButton).simulate('click');

    expect(onClick.calledOnce).to.be.true;
  })
});
