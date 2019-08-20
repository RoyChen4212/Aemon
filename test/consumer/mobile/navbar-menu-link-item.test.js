import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NavbarMenuLinkItem from '../../../components/consumer/mobile/navbar-menu-link-item';

describe('navbar-menu-link-item', () => {
  it('should have correct class names', () => {
    const label = 'label';
    const href = 'href';
    const wrapper = shallow(<NavbarMenuLinkItem label={label} href={href} />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-navbar-menu-link-item')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<NavbarMenuLinkItem className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should have correct label and href', () => {
    const label = 'label';
    const href = 'href';
    const wrapper = shallow(<NavbarMenuLinkItem label={label} href={href} />);
    expect(wrapper.find('.pbg-mobile-label-link').prop('href')).to.equal(href);
    expect(wrapper.find('span').text()).to.equal(label);
  });
});
