import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import SidebarModal from '../../../components/consumer/desktop/sidebar-modal';

describe('Sidebar Modal', () => {
  const contentClass = '.pbg-sidebar-modal-main-content';
  const sidebarClass = '.pbg-sidebar-modal-sidebar-content';
  const dialogClass = '.pbg-modal-dialog';

  it('should have correct class', () => {
    const wrapper = shallow(<SidebarModal />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-modal')).to.be.true;
    expect(wrapper.hasClass('pbg-sidebar-modal')).to.be.true;
  });

  it('should have modal dialog', () => {
    const wrapper = shallow(<SidebarModal />);
    expect(wrapper.find(dialogClass)).to.have.lengthOf(1);
  });

  it('should have modal overlay', () => {
    const wrapper = shallow(<SidebarModal />);
    expect(wrapper.find('.pbg-modal-overlay')).to.have.lengthOf(1);
  });

  it('should call onBackClick upon clicking overlay', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<SidebarModal onBackClick={spy}/>)
    wrapper.find('.pbg-modal-overlay').simulate('click');
    expect(spy.calledOnce).to.be.true;
  });

  it('should not break if no onBackClick is given', () => {
    const wrapper = shallow(<SidebarModal />);
    expect(() => {
      wrapper.find('.pbg-modal-overlay').simulate('click');
    }).not.to.throw();
  });

  it('should have a close icon', () => {
    const wrapper = shallow(<SidebarModal />);
    expect(wrapper.find('.pbg-modal-close-button')).to.have.lengthOf(1);
  });

  it('should call onBackClick upon clicking overlay close icon', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<SidebarModal onBackClick={spy}/>)
    wrapper.find('.pbg-modal-close-button').simulate('click');
    expect(spy.calledOnce).to.be.true;
  });

  it('should have main content section', () => {
    const wrapper = shallow(<SidebarModal />);
    expect(
      wrapper.find(dialogClass).find(contentClass)
    ).to.have.lengthOf(1);
  });

  it('should render given children in main content', () => {
    const expected = <div>Some content</div>;
    const wrapper = shallow(<SidebarModal mainContent={expected} />);
    expect(
      wrapper.find(dialogClass).find(contentClass).contains(expected)
    ).to.be.true;
  });

  it('should have sidebar content section', () => {
    const wrapper = shallow(<SidebarModal />);
    expect(
      wrapper.find(dialogClass).find(sidebarClass)
    ).to.have.lengthOf(1);
  });

  it('should render given children in main content', () => {
    const expected = <div>Some content</div>;
    const wrapper = shallow(<SidebarModal sidebarContent={expected} />);
    expect(
      wrapper.find(dialogClass).find(sidebarClass).contains(expected)
    ).to.be.true;
  });
});
