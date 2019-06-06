import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import SecondaryModal from '../../../components/consumer/desktop/secondary-modal';

describe('secondary-modal', () => {
  const dialogClass = '.pbg-modal-dialog';
  const contentClass = '.pbg-modal-content';

  it('should have correct class', () => {
    const wrapper = shallow(<SecondaryModal />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-modal')).to.be.true;
    expect(wrapper.hasClass('pbg-secondary-modal')).to.be.true;
  });

  it('should have modal dialog', () => {
    const wrapper = shallow(<SecondaryModal />);
    expect(wrapper.find(dialogClass)).to.have.lengthOf(1);
  });

  it('should have modal overlay', () => {
    const wrapper = shallow(<SecondaryModal />);
    expect(wrapper.find('.pbg-modal-overlay')).to.have.lengthOf(1);
  });

  it('should call onClose upon clicking overlay', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<SecondaryModal onClose={spy} />);
    wrapper.find('.pbg-modal-overlay').simulate('click');
    expect(spy.calledOnce).to.be.true;
  });

  it('should not break if no onClose is given', () => {
    const wrapper = shallow(<SecondaryModal />);
    expect(() => {
      wrapper.find('.pbg-modal-overlay').simulate('click');
    }).not.to.throw();
  });

  it('should have a close icon', () => {
    const wrapper = shallow(<SecondaryModal />);
    expect(wrapper.find('.pbg-modal-close-button')).to.have.lengthOf(1);
  });

  it('should call onClose upon clicking overlay close icon', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<SecondaryModal onClose={spy} />);
    wrapper.find('.pbg-modal-close-button').simulate('click');
    expect(spy.calledOnce).to.be.true;
  });

  it('should have a title if it is given', () => {
    const title = 'Modal title';
    const wrapper = shallow(<SecondaryModal title={title} />);
    expect(wrapper.find(contentClass).contains(title)).to.be.true;
  });

  it('should have an icon if iconType is given', () => {
    const wrapper = shallow(<SecondaryModal iconType="rocket" />);
    expect(wrapper.find('.pbg-modal-icon')).to.have.lengthOf(1);
  });

  it('should have a content section', () => {
    const wrapper = shallow(
      <SecondaryModal>
        <p>Modal content</p>
      </SecondaryModal>
    );
    expect(wrapper.find(dialogClass).find(contentClass)).to.have.lengthOf(1);
  });

  it('should render given children in content', () => {
    const expected = <div>Some content</div>;
    const wrapper = shallow(<SecondaryModal>{expected}</SecondaryModal>);
    expect(
      wrapper
        .find(dialogClass)
        .find(contentClass)
        .contains(expected)
    ).to.be.true;
  });
});
