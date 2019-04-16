import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import NoAccountWarning from 
  '../../../components/consumer/mobile/no-account-warning';
import { SmallButton } from 
  '../../../components/consumer/mobile/button';

describe('NoAccountWarning', () => {
  it('should have correct class', () => {
    const wrapper = shallow(<NoAccountWarning />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-no-account-warning')).to.be.true;
  });

  it('should accept extra classNames', () => {
    const wrapper = shallow(<NoAccountWarning className="foo bar"/>);
    expect(wrapper.hasClass('foo')).to.be.true;
    expect(wrapper.hasClass('bar')).to.be.true;
  });

  it('should accept a title prop', () => {
    const title = "A title";
    const wrapper = shallow(<NoAccountWarning title={title}/>);

    expect(wrapper.html()).to.include(title);
  });

  it('should accept a text prop', () => {
    const text = "A text";
    const wrapper = shallow(<NoAccountWarning text={text}/>);

    expect(wrapper.html()).to.include(text);
  });

  it('should accept a ctaText prop', () => {
    const cta = "Click here!";
    const wrapper = shallow(<NoAccountWarning ctaText={cta}/>);

    expect(wrapper.html()).to.include(cta);
  });

  it('should execute the onClick handler', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<NoAccountWarning onClick={onClick}/>)
    wrapper.find(SmallButton).simulate('click');
    expect(onClick.calledOnce).to.be.true;
  });
});