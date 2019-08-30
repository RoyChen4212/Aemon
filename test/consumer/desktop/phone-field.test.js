import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import PhoneField from '../../../components/consumer/desktop/phone-field';
import TextField from '../../../components/consumer/desktop/text-field';
import Picker, { PICKER_EMPTY_VALUE } from '../../../components/consumer/desktop/picker';
import PickerMenu from '../../../components/consumer/desktop/picker-menu';
import Container from '../../../components/consumer/desktop/container';

describe('Phone Field', () => {
  const options = [
    { label: { term: '123456789' }, value: '123456789' },
    { label: { term: '987654321' }, value: '987654321' },
    { label: { term: 'Add new phone number' }, value: PICKER_EMPTY_VALUE },
  ];

  it('should have correct class', () => {
    const wrapper = shallow(<PhoneField />);
    expect(wrapper.hasClass('pbg-phone-field')).to.be.true;
  });

  it('should have correct className when provided', () => {
    const className = 'className';
    const wrapper = shallow(<PhoneField className={className} />);
    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should display label', () => {
    const label = 'label';
    const wrapper = shallow(<PhoneField label={label} />);
    expect(wrapper.find('.pbg-desktop-label-normal').text()).to.equal(label);
  });

  it('should not show picker when no options are passed', () => {
    const wrapper = shallow(<PhoneField />);
    expect(wrapper.find(Container)).to.have.lengthOf(0);
  });

  it('should render a Picker when options are pased', () => {
    const wrapper = shallow(<PhoneField options={options} />);
    expect(wrapper.find(Picker)).to.have.lengthOf(1);
  });

  it('should pass phone options to Picker', () => {
    const wrapper = mount(<PhoneField options={options} />);
    expect(wrapper.find(PickerMenu).prop('options')).to.eql(options);
  });

  it('should pass selected value to Picker', () => {
    const { value } = options[0];
    const wrapper = mount(<PhoneField options={options} value={value} />);
    expect(wrapper.find(Picker).prop('value')).to.equal(value);
  });

  it('should show add new button when value other than new is selected', () => {
    const { value } = options[0];
    const wrapper = mount(<PhoneField options={options} value={value} />);
    expect(wrapper.find('.pbg-phone-field-add-container')).to.have.lengthOf(1);
  });

  it('should not show add new button when no options are passed', () => {
    const wrapper = mount(<PhoneField />);
    expect(wrapper.find('.pbg-phone-field-add-container')).to.have.lengthOf(0);
  });

  it('should not show add new button when new value is selected', () => {
    const wrapper = mount(<PhoneField options={options} value="" />);
    expect(wrapper.find('.pbg-phone-field-add-container')).to.have.lengthOf(0);
  });

  it('return empty object value when no value is given', () => {
    const wrapper = shallow(<PhoneField />);
    expect(wrapper.instance().value).to.eql('');
  });

  it('should return correct value when clicking add new button', done => {
    const { value } = options[0];
    const onChange = ev => {
      expect(ev.target.value).to.eql('');
      done();
    };
    const wrapper = mount(<PhoneField value={value} onChange={onChange} options={options} />);
    wrapper
      .find('.pbg-phone-field-add-container')
      .find('button')
      .simulate('click');
  });

  it('should show TextField when new value is selected', () => {
    const wrapper = mount(<PhoneField options={options} value="" />);
    expect(wrapper.find(TextField)).to.have.lengthOf(1);
  });

  it('should show TextField when no options are passed', () => {
    const wrapper = mount(<PhoneField options={options} />);
    expect(wrapper.find(TextField)).to.have.lengthOf(1);
  });

  it('should report new phone value on TextField change', done => {
    const phone = '9912341234';
    const event = { target: { value: phone } };
    const onChange = ev => {
      expect(ev.target.value).to.eql(phone);
      done();
    };
    const wrapper = mount(<PhoneField value="" onChange={onChange} />);
    wrapper.find('input').simulate('change', event);
  });

  it('should pass label to TextField change', () => {
    const expected = 'A label';
    const wrapper = mount(<PhoneField phoneLabel={expected} />);
    expect(wrapper.find(TextField).prop('label')).to.equal(expected);
  });

  it('should pass error to phone field only if present and touched', () => {
    const expected = 'an error';
    const wrapper = mount(<PhoneField error={{ phone: expected }} onChange={() => {}} />);
    expect(wrapper.instance().error).to.be.null;
    wrapper.setState({ touched: true }, () => {
      expect(wrapper.instance().error).to.equal(expected);
    });
  });

  it('should pass error to phone field only if present and force display is passed', () => {
    const expected = 'an error';
    const wrapper = mount(<PhoneField error={{ phone: expected }} forceErrorDisplay />);
    expect(wrapper.instance().error).to.equal(expected);
  });

  it('should set state touched when blur event occurs on text field', () => {
    const wrapper = shallow(<PhoneField />);
    expect(wrapper.state().touched).to.be.false;
    wrapper.find(TextField).simulate('blur');
    expect(wrapper.state().touched).to.be.true;
  });

  it('should set execute onBlur when blur event occurs on text field', () => {
    const onBlur = sinon.spy();
    const wrapper = shallow(<PhoneField onBlur={onBlur} />);
    wrapper.find(TextField).simulate('blur');
    expect(onBlur.calledOnce).to.be.true;
  });

  it('should call onChange after select is changed', () => {
    const onChange = sinon.spy();
    const wrapper = mount(<PhoneField onChange={onChange} options={options} />);
    wrapper
      .find('.pbg-picker-menu')
      .find('.picker-menu-item')
      .at(0)
      .simulate('click');
    expect(onChange.calledOnce).to.be.true;
  });

  it('should define default orLabel and addLabel without passing props', () => {
    const wrapper = mount(<PhoneField options={options} />);
    expect(wrapper.prop('orLabel')).to.equal('Or');
    expect(wrapper.prop('addLabel')).to.equal('Add New');
  });

  it('should pass orLabel and addLabel props exactly', () => {
    const wrapper = mount(<PhoneField options={options} value="123456789" orLabel="OR" addLabel="ADD" />);
    const addContainer = wrapper.find('.pbg-phone-field-add-container');
    expect(addContainer.find('.pbg-desktop-label-normal').text()).to.equal('OR');
    expect(
      addContainer
        .find('button')
        .find('span')
        .text()
    ).to.equal('ADD');
  });
});
