import React from 'react';
import { shallow, mount } from 'enzyme';

import Divider from '../../../components/consumer/desktop/divider';

describe('Divider', () => {
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

  it('should accept label prop', () => {
    const label = 'Label';
    const wrapper = mount(<Divider label={label} />);
    expect(wrapper.props().label).to.equal(label);
  });

  it('should accept hint prop', () => {
    const hint = 'Helper text';
    const wrapper = mount(<Divider hint={hint} />);
    expect(wrapper.props().hint).to.equal(hint);
  });

  it('Label should not be rendered if property is not provided', () => {
    const hint = 'Helper text';
    const wrapper = mount(<Divider hint={hint} />);
    expect(wrapper.find('.pbg-divider-hint')).to.have.lengthOf(0);
  });
});
