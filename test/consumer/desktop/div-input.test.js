import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import DivInput from '../../../components/consumer/desktop/div-input/div-input';

describe('facebook-input', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<DivInput />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-div-input')).to.be.true;
  });
});
