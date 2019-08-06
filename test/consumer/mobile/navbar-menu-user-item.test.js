import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NavbarMenuUserItem from '../../../components/consumer/mobile/navbar-menu-user-item';

describe('navbar-menu-user-item', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<NavbarMenuUserItem />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-navbar-menu-user-item')).to.be.true;
  });
});
