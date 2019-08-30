import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../../../components/consumer/desktop/avatar';

describe('Desktop Avatar', () => {
  it('should have correct class', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
  });

  it('should have correct className when provided', () => {
    const className = 'className';
    const wrapper = shallow(<Avatar className={className} />);
    expect(wrapper.hasClass(className)).to.be.true;
  });
});
