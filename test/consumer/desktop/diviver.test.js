import React from 'react';
import { shallow } from 'enzyme';

import Divider from '../../../components/consumer/desktop/divider';

describe('Divider', () => {
  it('should render div', () => {
    const wrapper = shallow(<Divider />);
    expect(wrapper.find('div')).to.have.lengthOf(1);
  });

  it('should have class pbg-consumer-desktop', () => {
    const wrapper = shallow(<Divider />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
  });

  it('should have class pbg-divider', () => {
    const wrapper = shallow(<Divider />);
    expect(wrapper.hasClass('pbg-divider')).to.be.true;
  });

  it('should accept className prop', () => {
    const className = 'my-3';
    const wrapper = shallow(<Divider className={className} />);
    expect(wrapper.hasClass(className)).to.be.true;
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-divider')).to.be.true;
  });
});
