import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import NavbarBrand from '../../../components/consumer/mobile/navbar-brand';

describe('NavbarBrand', () => {
  const url = 'url';
  const poweredByText = 'poweredByText';
  const children = [<div key="child-1" />, <div key="child-2" />];

  it('should have correct class names', () => {
    const wrapper = shallow(<NavbarBrand merchantLogoUrl={url} poweredByText={poweredByText} />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-navbar-brand')).to.be.true;
  });

  it('should have icon with given URL', () => {
    const wrapper = shallow(<NavbarBrand merchantLogoUrl={url} poweredByText={poweredByText} />);

    expect(wrapper.find('.pbg-navbar-brand-icon').prop('style').backgroundImage).to.equal(`url(${url})`);
  });

  it('should have poweredBy text', () => {
    const wrapper = shallow(<NavbarBrand merchantLogoUrl={url} poweredByText={poweredByText} />);

    expect(wrapper.find('.pbg-navbar-brand-text').text()).to.equal(poweredByText);
  });

  it('should have menu when children is given', () => {
    const wrapper = shallow(
      <NavbarBrand merchantLogoUrl={url} poweredByText={poweredByText}>
        {children}
      </NavbarBrand>
    );

    expect(wrapper.find('.pbg-icon-menu-small-blue').length).to.equal(1);
  });

  it('should have not menu when children is not given', () => {
    const wrapper = shallow(<NavbarBrand merchantLogoUrl={url} poweredByText={poweredByText} />);

    expect(wrapper.find('.pbg-navbar-brand-menu').length).to.equal(0);
  });

  it('should be expandable on click', () => {
    const wrapper = shallow(
      <NavbarBrand merchantLogoUrl={url} poweredByText={poweredByText}>
        {children}
      </NavbarBrand>
    );
    wrapper.find('.pbg-icon-menu-small-blue').simulate('click');
    wrapper.update();

    expect(wrapper.find('.pbg-icon-cross-small-blue').length).to.equal(1);
    expect(wrapper.find('.pbg-icon-menu-small-blue').length).to.equal(0);
    expect(wrapper.find('.pbg-navbar-brand-menu-items').length).to.equal(1);

    wrapper.find('.pbg-icon-cross-small-blue').simulate('click');
    wrapper.update();

    expect(wrapper.find('.pbg-icon-cross-small-blue').length).to.equal(0);
    expect(wrapper.find('.pbg-icon-menu-small-blue').length).to.equal(1);
    expect(wrapper.find('.pbg-navbar-brand-menu-items').length).to.equal(0);
  });
});
