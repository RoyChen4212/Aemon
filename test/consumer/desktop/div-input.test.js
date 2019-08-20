import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import DivInput from '../../../components/consumer/desktop/div-input';

describe('facebook-input', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<DivInput />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-div-input')).to.be.true;
  });

  it('should have correct className when provided', () => {
    const className = 'className';
    const wrapper = shallow(<DivInput className={className} />);
    expect(wrapper.hasClass(className)).to.be.true;
  });
});
