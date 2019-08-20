import React from 'react';
import { mount, shallow } from 'enzyme';

import Banner from '../../../components/consumer/desktop/banner';

describe('Banner', () => {
  it('should render text prop', () => {
    const text = 'My first alert';
    const wrapper = shallow(<Banner text={text} />);
    expect(wrapper.html()).to.include(text);
  });

  it('should have correct wrapper class', () => {
    const wrapper = shallow(<Banner text="" />);
    expect(wrapper.hasClass('pbg-banner')).to.be.true;
  });

  it('should have correct className when provided', () => {
    const className = 'className';
    const wrapper = shallow(<Banner className={className} />);
    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should pass "dark-blue" as default color prop and render correct background class', () => {
    const expectedColor = Banner.COLORS.DARK_BLUE;
    const wrapper = mount(<Banner text="Any" />);
    expect(wrapper.prop('color')).to.equal(expectedColor);
    expect(wrapper.render().hasClass('pbg-banner-dark-blue')).to.be.true;
  });
});
