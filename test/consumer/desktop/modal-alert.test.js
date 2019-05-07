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

  it('should have add title in label strong', () => {
    const wrapper = mount(<ModalAlert title="some title"/>);
    expect(wrapper.find('.pbg-modal-alert-title').text()).to.equal('some title');
  });

  it('should have add text in label normal', () => {
    const wrapper = mount(<ModalAlert text="some text"/>);
    expect(wrapper.find('.pbg-modal-alert-text').text()).to.equal('some text');
  });

  it('should have add clickable text', () => {
    const wrapper = mount(<ModalAlert text={{ label: 'some text', action: () => {} }} />);
    expect(wrapper.find('.pbg-modal-alert-text').find('a').text()).to.equal('some text');
  });

  it('should add pbg-scale-up-ver-bottom if animate is passed', () => {
    const wrapper = shallow(<ModalAlert animate />);
    expect(wrapper.hasClass('pbg-scale-up-ver-bottom')).to.be.true;
  });

  it('should remove pbg-scale-up-ver-bottom if animate is passed after 9 seconds of being displayed', function(done) {
    const wrapper = shallow(<ModalAlert animate hideAfter={100}/>);
    expect(wrapper.hasClass('pbg-scale-up-ver-bottom')).to.be.true;
    setTimeout(() => {
      expect(wrapper.hasClass('pbg-scale-down-ver-bottom')).to.be.true;
      expect(wrapper.hasClass('pbg-scale-up-ver-bottom')).to.be.false;
      done();
    }, 500);
  });
});