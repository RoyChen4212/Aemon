import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SectionSeparator from '../../../components/consumer/mobile/section-separator';

describe('section-separator', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<SectionSeparator />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-section-separator')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<SectionSeparator className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });
});
