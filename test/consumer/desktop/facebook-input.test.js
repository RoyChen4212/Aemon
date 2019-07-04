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
    const text = 'Continue with Facebook';
    const hint = 'You previously logged in with Facebook. Please click to authenticate again.';
    const wrapper = shallow(<FacebookInput hint={hint} buttonLabel={text} />);
    const facebookButton = wrapper.find(FacebookButton);
    expect(facebookButton.dive().find("span").text()).to.equal(text);
  });

  it('should have correct hint', () => {
    const text = 'Continue with Facebook';
    const hint = 'You previously logged in with Facebook. Please click to authenticate again.';
    const wrapper = shallow(<FacebookInput hint={hint} buttonLabel={text} />);
    const hintEl = wrapper.find(".pbg-desktop-secondary-text");
    expect(hintEl.text()).to.equal(hint);
  });

  it('should be clickable', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<FacebookInput onClick={onClick} />);
    wrapper.find(FacebookButton).simulate('click');

    expect(onClick.calledOnce).to.be.true;
  })
});
