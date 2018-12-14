import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Hint, { classes, types } from '../../../components/consumer/mobile/hint';

describe('Hint', () => {
  it('should render a span tag', () => {
    const wrapper = shallow(<Hint />);
    expect(wrapper.find('span')).to.have.lengthOf(1);
  });

  it('should render with text', () => {
    const expected = 'Some text';
    const wrapper = shallow(<Hint>{expected}</Hint>);
    expect(wrapper.find('span').text()).to.equal(expected);
  });

  it('should have base class when no type is given', () => {
    const wrapper = shallow(<Hint>some text</Hint>);
    expect(wrapper.find('span').hasClass(classes.base)).to.be.true;
  });

  it('should have correct class when error type', () => {
    const wrapper = shallow(<Hint type={types.ERROR}>some text</Hint>);
    expect(wrapper.find('span').hasClass(classes[types.ERROR])).to.be.true;
  });

  it('should have correct class when clickable type', () => {
    const wrapper = shallow(<Hint type={types.CLICKABLE}>some text</Hint>);
    expect(wrapper.find('span').hasClass(classes[types.CLICKABLE])).to.be.true;
  });

  it('should call onClick event when given', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Hint onClick={onClick}>some text</Hint>);
    wrapper.find('span').find('a').simulate('click');
    expect(onClick.calledOnce).to.be.true;
  });
});
