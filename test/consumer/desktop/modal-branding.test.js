import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ModalBranding from '../../../components/consumer/desktop/modal-branding';
import Divider from '../../../components/consumer/desktop/divider';

describe('ModalBranding', () => {
  const logo = 'https://myimage.com';

  it('should have correct class name', () => {
    const wrapper = shallow(<ModalBranding />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-modal-branding')).to.be.true;
  });

  it('should render a header', () => {
    const wrapper = shallow(<ModalBranding />);
    const header = wrapper.find('.pbg-modal-branding-header');
    expect(header).to.have.lengthOf(1);
  });

  it('should render an image inside a merchant-logo', () => {
    const wrapper = shallow(<ModalBranding logo={logo} />);
    const img = wrapper.find('.pbg-modal-branding-merchant-logo').find('img');
    expect(img).to.have.lengthOf(1);
  });

  it('should render an image inside a powered-by-logo', () => {
    const wrapper = shallow(<ModalBranding />);
    const img = wrapper.find('.pbg-modal-branding-powered-by-logo').find('img');
    expect(img).to.have.lengthOf(1);
  });

  it('should render a "powered by" phrase inside a powered-by-logo', () => {
    const wrapper = shallow(<ModalBranding />);
    const span = wrapper.find('.pbg-modal-branding-powered-by-logo').find('span');
    expect(span.text()).to.be.equal('powered by');
  });

  it('should render a footer if children are given', () => {
    const child = <span>Foobar</span>;
    const wrapper = shallow(<ModalBranding>{child}</ModalBranding>);
    const header = wrapper.find('.pbg-modal-branding-footer');
    expect(header).to.have.lengthOf(1);
  });

  it('should render a Divider inside the footer', () => {
    const child = <span>Foobar</span>;
    const wrapper = shallow(<ModalBranding>{child}</ModalBranding>);
    const header = wrapper.find('.pbg-modal-branding-footer').find(Divider);
    expect(header).to.have.lengthOf(1);
  });

  it('should render a pbg-modal-branding-footer-content inside the footer', () => {
    const child = <span>Foobar</span>;
    const wrapper = shallow(<ModalBranding>{child}</ModalBranding>);
    const header = wrapper.find('.pbg-modal-branding-footer').find('.pbg-modal-branding-footer-content');
    expect(header).to.have.lengthOf(1);
  });

  it('should not render a footer if children are not given', () => {
    const wrapper = shallow(<ModalBranding />);
    const header = wrapper.find('.pbg-modal-branding-footer');
    expect(header).to.have.lengthOf(0);
  });
});
