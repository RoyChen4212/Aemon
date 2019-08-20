import React from 'react';
import { mount, shallow } from 'enzyme';
import ModalAlert from '../../../components/consumer/desktop/modal-alert';

describe('ModalAlert', () => {
  it('should render div', () => {
    const wrapper = shallow(<ModalAlert />);
    expect(wrapper.find('div')).to.have.lengthOf(1);
  });

  it('should have class pbg-consumer-desktop', () => {
    const wrapper = shallow(<ModalAlert />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
  });

  it('should have class pbg-modal-alert', () => {
    const wrapper = shallow(<ModalAlert />);
    expect(wrapper.hasClass('pbg-modal-alert')).to.be.true;
  });

  it('should add pbg-modal-alert-error className', () => {
    const wrapper = shallow(<ModalAlert error />);
    expect(wrapper.hasClass('pbg-modal-alert-error')).to.be.true;
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-modal-alert')).to.be.true;
  });

  it('should add pbg-modal-alert-warning className', () => {
    const wrapper = shallow(<ModalAlert warning />);
    expect(wrapper.hasClass('pbg-modal-alert-warning')).to.be.true;
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-modal-alert')).to.be.true;
  });

  it('should add pbg-modal-alert-success className', () => {
    const wrapper = shallow(<ModalAlert success />);
    expect(wrapper.hasClass('pbg-modal-alert-success')).to.be.true;
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-modal-alert')).to.be.true;
  });

  it('should have correct className when provided', () => {
    const className = 'className';
    const wrapper = shallow(<ModalAlert className={className} />);
    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should add title in label strong', () => {
    const wrapper = shallow(<ModalAlert title="some title" />);
    expect(
      wrapper
        .find('.pbg-modal-alert-title')
        .at(0)
        .prop('children')
    ).to.equal('some title');
  });

  it('should add text in label normal', () => {
    const wrapper = mount(<ModalAlert text="some text" />);
    expect(
      wrapper
        .find('.pbg-modal-alert-text')
        .at(0)
        .prop('children')
    ).to.equal('some text');
  });

  it('should have add clickable text', () => {
    const wrapper = mount(<ModalAlert text="some text" onTextClick={() => {}} />);
    expect(
      wrapper
        .find('.pbg-modal-alert-text')
        .find('a')
        .text()
    ).to.equal('some text');
  });

  it('should add a pbg-fade-out class after the given timeout', done => {
    const wrapper = shallow(<ModalAlert hideAfter="100" />);
    expect(wrapper.hasClass('pbg-fade-out')).to.be.false;
    setTimeout(() => {
      expect(wrapper.hasClass('pbg-fade-out')).to.be.true;
      done();
    }, 100);
  });
});
