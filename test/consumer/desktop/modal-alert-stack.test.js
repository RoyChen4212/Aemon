import React from 'react';
import { mount, shallow } from 'enzyme';
import ModalAlertStack from '../../../components/consumer/desktop/modal-alert-stack';

describe('ModalAlertStack', () => {
  const alerts = [
    { type: 'error', title: 'Error', text: 'Some error text' },
    { type: 'warning', title: 'Warning', text: 'Some warning text' },
    { type: 'success', title: 'Success', text: 'Some success text' },
  ];

  it('should render div', () => {
    const wrapper = shallow(<ModalAlertStack />);
    expect(wrapper.find('div')).to.have.lengthOf(1);
  });

  it('should have class pbg-consumer-desktop', () => {
    const wrapper = shallow(<ModalAlertStack />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
  });

  it('should have class pbg-modal-alert-stack', () => {
    const wrapper = shallow(<ModalAlertStack />);
    expect(wrapper.hasClass('pbg-modal-alert-stack')).to.be.true;
  });

  it('should render given alerts', () => {
    const wrapper = mount(<ModalAlertStack alerts={alerts} />);
    expect(wrapper.find('.pbg-modal-alert-error')).to.have.lengthOf(1);
    expect(wrapper.find('.pbg-modal-alert-warning')).to.have.lengthOf(1);
    expect(wrapper.find('.pbg-modal-alert-success')).to.have.lengthOf(1);
  });
});
