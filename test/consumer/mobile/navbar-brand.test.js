import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import NavbarBrand from '../../../components/consumer/mobile/navbar-brand';

describe('NavbarBrand', () => {
  const url = 'url';
  const poweredByText = 'poweredByText';

  it('should have correct class names', () => {
    const wrapper = shallow(<NavbarBrand merchantLogoUrl={url} poweredByText={poweredByText} menuIconVisible />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-navbar-brand')).to.be.true;
  });

  it('should have icon with given URL', () => {
    const wrapper = shallow(<NavbarBrand merchantLogoUrl={url} poweredByText={poweredByText} menuIconVisible />);

    expect(wrapper.find('.pbg-navbar-brand-icon').prop('style').backgroundImage).to.equal(`url(${url})`);
  });

  it('should have poweredBy text', () => {
    const wrapper = shallow(<NavbarBrand merchantLogoUrl={url} poweredByText={poweredByText} menuIconVisible />);

    expect(wrapper.find('.pbg-navbar-brand-text').text()).to.equal(poweredByText);
  });

  it('should have menu when menuIconVisible is true', () => {
    const wrapper = shallow(<NavbarBrand merchantLogoUrl={url} poweredByText={poweredByText} menuIconVisible />);

    expect(wrapper.find('.pbg-navbar-brand-menu').length).to.equal(1);
  });

  it('should have not menu when menuIconVisible is false', () => {
    const wrapper = shallow(<NavbarBrand merchantLogoUrl={url} poweredByText={poweredByText} />);

    expect(wrapper.find('.pbg-navbar-brand-menu').length).to.equal(0);
  });

  it('should have clickable menu', () => {
    const onClick = sinon.spy();
    const wrapper = shallow(
      <NavbarBrand merchantLogoUrl={url} poweredByText={poweredByText} onMenuClick={onClick} menuIconVisible />
    );
    wrapper.find('.pbg-navbar-brand-menu').simulate('click');
    expect(onClick.calledOnce).to.be.true;
  });
});
