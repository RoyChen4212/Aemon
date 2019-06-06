import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import PrimaryModal from '../../../components/consumer/desktop/primary-modal';
import ModalAlert from '../../../components/consumer/desktop/modal-alert';

describe('primary-modal', () => {
  const contentClass = '.pbg-primary-modal-main-content';
  const sidebarClass = '.pbg-primary-modal-sidebar-content';

  it('should have correct class', () => {
    const wrapper = shallow(<PrimaryModal />);
    expect(wrapper.hasClass('pbg-primary-modal')).to.be.true;
  });

  it('should have main content section', () => {
    const wrapper = shallow(<PrimaryModal />);
    expect(wrapper.find(contentClass)).to.have.lengthOf(1);
  });

  it('should have sidebar content section', () => {
    const wrapper = shallow(<PrimaryModal />);
    expect(wrapper.find(sidebarClass)).to.have.lengthOf(1);
  });

  it('should render given children in main content', () => {
    const expected = <div>Main content</div>;
    const wrapper = shallow(<PrimaryModal mainContent={expected} />);
    expect(wrapper.find(contentClass).contains(expected)).to.be.true;
  });

  it('should render given children in sidebar content', () => {
    const expected = <div>Sidebar content</div>;
    const wrapper = shallow(<PrimaryModal sidebarContent={expected} />);
    expect(wrapper.find(sidebarClass).contains(expected)).to.be.true;
  });

  it('should render given alerts', () => {
    const alert = {
      type: 'error',
      title: 'error alert title',
      text: 'error alert text',
    };
    const wrapper = mount(<PrimaryModal alerts={[alert]} />);
    expect(
      wrapper.find('.pbg-modal-alert-stack').find(ModalAlert)
    ).to.have.lengthOf(1);
  });
});
