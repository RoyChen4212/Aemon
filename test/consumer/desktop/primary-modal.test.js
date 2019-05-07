import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import PrimaryModal from '../../../components/consumer/desktop/primary-modal';
import ModalAlert from '../../../components/consumer/desktop/modal-alert';

describe('Sidebar Modal', () => {
  const contentClass = '.pbg-primary-modal-main-content';
  const sidebarClass = '.pbg-primary-modal-sidebar-content';
  const dialogClass = '.pbg-modal-dialog';

  it('should have correct class', () => {
    const wrapper = shallow(<PrimaryModal />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-modal')).to.be.true;
    expect(wrapper.hasClass('pbg-primary-modal')).to.be.true;
  });

  it('should have modal dialog', () => {
    const wrapper = shallow(<PrimaryModal />);
    expect(wrapper.find(dialogClass)).to.have.lengthOf(1);
  });

  it('should have modal overlay', () => {
    const wrapper = shallow(<PrimaryModal />);
    expect(wrapper.find('.pbg-modal-overlay')).to.have.lengthOf(1);
  });

  it('should call onBackClick upon clicking overlay', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<PrimaryModal onBackClick={spy}/>)
    wrapper.find('.pbg-modal-overlay').simulate('click');
    expect(spy.calledOnce).to.be.true;
  });

  it('should not break if no onBackClick is given', () => {
    const wrapper = shallow(<PrimaryModal />);
    expect(() => {
      wrapper.find('.pbg-modal-overlay').simulate('click');
    }).not.to.throw();
  });

  it('should have a close icon', () => {
    const wrapper = shallow(<PrimaryModal />);
    expect(wrapper.find('.pbg-modal-close-button')).to.have.lengthOf(1);
  });

  it('should call onBackClick upon clicking overlay close icon', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<PrimaryModal onBackClick={spy}/>)
    wrapper.find('.pbg-modal-close-button').simulate('click');
    expect(spy.calledOnce).to.be.true;
  });

  it('should have main content section', () => {
    const wrapper = shallow(<PrimaryModal />);
    expect(
      wrapper.find(dialogClass).find(contentClass)
    ).to.have.lengthOf(1);
  });

  it('should render given children in main content', () => {
    const expected = <div>Some content</div>;
    const wrapper = shallow(<PrimaryModal mainContent={expected} />);
    expect(
      wrapper.find(dialogClass).find(contentClass).contains(expected)
    ).to.be.true;
  });

  it('should have sidebar content section', () => {
    const wrapper = shallow(<PrimaryModal />);
    expect(
      wrapper.find(dialogClass).find(sidebarClass)
    ).to.have.lengthOf(1);
  });

  it('should render given children in main content', () => {
    const expected = <div>Some content</div>;
    const wrapper = shallow(<PrimaryModal sidebarContent={expected} />);
    expect(
      wrapper.find(dialogClass).find(sidebarClass).contains(expected)
    ).to.be.true;
  });

  it('should render given alerts', () => {
    const alerts = [
      { type: 'error', title: 'error alert title', text: 'error alert text' },
    ];
    const wrapper = mount(<PrimaryModal alerts={alerts} />);
    expect(wrapper.find('.pbg-modal-alerts').find(ModalAlert)).to.have.lengthOf(1);
    expect(wrapper.find('.pbg-modal-alerts').find(ModalAlert).prop('title')).to.equal(alerts[0].title);
    expect(wrapper.find('.pbg-modal-alerts').find(ModalAlert).prop('text')).to.equal(alerts[0].text);
    expect(wrapper.find('.pbg-modal-alerts').find(ModalAlert).prop('error')).to.be.true;
  });
});