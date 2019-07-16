import React from 'react';
import { shallow } from 'enzyme';

import Divider from '../../../components/consumer/mobile/divider';

describe('Divider', () => {
  it('should have class pbg-consumer-desktop', () => {
    const wrapper = shallow(<Divider />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
  });

  it('should have class pbg-divider', () => {
    const wrapper = shallow(<Divider />);
    expect(wrapper.hasClass('pbg-divider')).to.be.true;
  });

  it('should accept className prop', () => {
    const className = 'my-3';
    const wrapper = shallow(<Divider className={className} />);
    expect(wrapper.hasClass(className)).to.be.true;
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-divider')).to.be.true;
  });
});
