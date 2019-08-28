import React from 'react';
import { shallow } from 'enzyme';

import Divider from '../../../components/consumer/mobile/divider';
import { expect } from 'chai';

describe('Divider', () => {
  it('should have correct classes', () => {
    const wrapper = shallow(<Divider />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-divider')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<Divider className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should accept className prop', () => {
    const className = 'custom-classname';
    const wrapper = shallow(<Divider className={className} />);
    expect(wrapper.hasClass(className)).to.be.true;
  });
});
