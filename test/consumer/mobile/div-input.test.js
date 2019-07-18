import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import DivInput from '../../../components/consumer/mobile/div-input';

describe('div-input', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<DivInput />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-div-input')).to.be.true;
  });
});
