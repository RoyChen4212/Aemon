import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import PrimaryModal from '../../../components/consumer/desktop/primary-modal';
import ModalAlert from '../../../components/consumer/desktop/modal-alert';

describe('primary-modal', () => {
  const contentClass = '.pbg-primary-modal-main-content';
  const sidebarClass = '.pbg-primary-modal-sidebar-content';
  const footerClass = '.pbg-primary-modal-footer-content';

  it('should have correct class', () => {
    const wrapper = shallow(<PrimaryModal />);
    expect(wrapper.hasClass('pbg-primary-modal')).to.be.true;
  });

  it('should have correct className when provided', () => {
    const className = 'className';
    const wrapper = shallow(<PrimaryModal className={className} />);
    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should have main content section', () => {
    const wrapper = shallow(<PrimaryModal />);
    expect(wrapper.find(contentClass)).to.have.lengthOf(1);
  });

  it('should have sidebar content section', () => {
    const wrapper = shallow(<PrimaryModal />);
    expect(wrapper.find(sidebarClass)).to.have.lengthOf(1);
  });

  it('should not have footer content section if no footer content is given', () => {
    const wrapper = shallow(<PrimaryModal />);
    expect(wrapper.find(footerClass)).to.be.empty;
  });

  it('should render given children in main content', () => {
    const expected = <div>Main content</div>;
    const wrapper = shallow(<PrimaryModal mainContent={expected} />);
    expect(wrapper.find(contentClass).contains(expected)).to.be.true;
  });

  it('should render given children in footer content', () => {
    const expected = <div>Footer content</div>;
    const wrapper = shallow(<PrimaryModal footerContent={expected} />);
    expect(wrapper.find(footerClass).contains(expected)).to.be.true;
  });

  it('should render given children in sidebar content', () => {
    const expected = <div>Sidebar content</div>;
    const wrapper = shallow(<PrimaryModal sidebarContent={expected} />);
    expect(wrapper.find(sidebarClass).contains(expected)).to.be.true;
  });

  it('should not contain a form if form is false', () => {
    const wrapper = shallow(<PrimaryModal form={false} />);
    expect(wrapper.find('form')).to.be.empty;
  });

  it('should render a form if form is true', () => {
    const wrapper = shallow(<PrimaryModal form />);
    expect(wrapper.find('form').hasClass('pbg-primary-modal-main-container')).to.be.true;
  });

  it('should pass formProps to form if given', () => {
    const onSubmit = sinon.spy();
    const wrapper = shallow(<PrimaryModal form formProps={{ onSubmit }} />);
    const form = wrapper.find('form');

    expect(form.prop('onSubmit')).to.equal(onSubmit);
    form.simulate('submit');
    expect(onSubmit.calledOnce).to.be.true;
  });

  it('should render given alerts', () => {
    const alert = {
      type: 'error',
      title: 'error alert title',
      text: 'error alert text',
    };
    const wrapper = mount(<PrimaryModal alerts={[alert]} />);
    expect(wrapper.find('.pbg-modal-alert-stack').find(ModalAlert)).to.have.lengthOf(1);
  });
});
