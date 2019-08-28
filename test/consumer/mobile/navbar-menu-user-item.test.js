import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NavbarMenuUserItem from '../../../components/consumer/mobile/navbar-menu-user-item';
import Avatar from '../../../components/consumer/mobile/avatar';

describe('navbar-menu-user-item', () => {
  it('should have correct class names', () => {
    const avatar = 'avatar';
    const fullName = 'avatar';
    const hint = 'hint';
    const wrapper = shallow(<NavbarMenuUserItem avatar={avatar} fullName={fullName} hint={hint} />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-navbar-menu-user-item')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<NavbarMenuUserItem className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should have correct avatar, hint and fullName', () => {
    const avatar = 'avatar';
    const fullName = 'avatar';
    const hint = 'hint';
    const wrapper = shallow(<NavbarMenuUserItem avatar={avatar} fullName={fullName} hint={hint} />);
    expect(wrapper.find(Avatar).prop('fullName')).to.equal(fullName);
    expect(wrapper.find(Avatar).prop('src')).to.equal(avatar);
    expect(wrapper.find('.pbg-mobile-small-normal').text()).to.equal(hint);
    expect(wrapper.find('.pbg-mobile-heading-2').text()).to.equal(fullName);
  });
});
