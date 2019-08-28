import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../../../components/consumer/mobile/avatar';
import { expect } from 'chai';

describe('Mobile Avatar', () => {
  it('should have correct class', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<Avatar className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should have correct size', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.props().size).to.equal(32);
  });

  it('should pass externally given size', () => {
    const expected = 200;
    const wrapper = shallow(<Avatar size={expected} />);
    expect(wrapper.props().size).to.equal(expected);
  });
});
