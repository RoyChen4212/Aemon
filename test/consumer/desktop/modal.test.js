import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import Modal from '../../../components/consumer/desktop/modal';
import ModalAlert from '../../../components/consumer/desktop/modal-alert';

describe('modal', () => {
  const dialogClass = '.pbg-modal-dialog';

  it('should have correct class', () => {
    const wrapper = shallow(<Modal className="custom-class" />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-modal')).to.be.true;
    expect(wrapper.hasClass('custom-class')).to.be.true;
  });

  it('should have modal dialog', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find(dialogClass)).to.have.lengthOf(1);
  });

  it('should have modal overlay when onClose is passed', () => {
    const wrapper = shallow(<Modal onClose={() => {}} />);
    expect(wrapper.find('.pbg-modal-overlay')).to.have.lengthOf(1);
  });

  it('should not have modal overlay when onClose is not passed', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find('.pbg-modal-overlay')).to.have.lengthOf(0);
  });

  it('should call onClose upon clicking overlay', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Modal onClose={spy} />);
    wrapper.find('.pbg-modal-overlay').simulate('click');
    expect(spy.calledOnce).to.be.true;
  });

  it('should have a close icon when onClose is given', () => {
    const wrapper = shallow(<Modal onClose={() => {}} />);
    expect(wrapper.find('.pbg-modal-close-button')).to.have.lengthOf(1);
  });

  it('should not have a close icon when onClose is not given', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.find('.pbg-modal-close-button')).to.have.lengthOf(0);
  });

  it('should call onClose upon clicking overlay close icon', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Modal onClose={spy} />);
    wrapper.find('.pbg-modal-close-button').simulate('click');
    expect(spy.calledOnce).to.be.true;
  });

  it('should render given alerts', () => {
    const alerts = [
      { type: 'error', title: 'error alert title', text: 'error alert text' },
    ];
    const wrapper = mount(<Modal alerts={alerts} />);
    expect(
      wrapper.find('.pbg-modal-alert-stack').find(ModalAlert)
    ).to.have.lengthOf(1);
  });
});
