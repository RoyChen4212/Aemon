import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import ContactImportInput from '../../../components/consumer/desktop/contact-import-input';
import TextField from '../../../components/consumer/desktop/text-field/text-field';
import ContactImportInputOption from '../../../components/consumer/desktop/contact-import-input/contact-import-input-option';

describe('contact-import-input', () => {
  const options = [
    {
      label: 'label1',
      value: 'value1',
      icon: 'icon1',
    },
    {
      label: 'label2',
      value: 'value2',
      icon: 'icon2',
    },
    {
      label: 'label3',
      value: 'value3',
      icon: 'icon3',
    },
  ];
  const placeholder = 'placeholder';
  const value = 'lab';

  it('should have correct class names', () => {
    const onSelect = sinon.spy();
    const onChange = sinon.spy();
    const wrapper = shallow(
      <ContactImportInput
        options={options}
        onSelect={onSelect}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    );
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-contact-import-input')).to.be.true;
  });

  it('should have correct className when provided', () => {
    const onSelect = sinon.spy();
    const onChange = sinon.spy();
    const className = 'className';
    const wrapper = shallow(
      <ContactImportInput
        options={options}
        onSelect={onSelect}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={className}
      />
    );
    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should have correct text field', () => {
    const onSelect = sinon.spy();
    const onChange = sinon.spy();
    const wrapper = shallow(
      <ContactImportInput
        options={options}
        onSelect={onSelect}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    );

    const textField = wrapper.find(TextField);
    expect(textField.length).to.equal(1);
    expect(textField.prop('placeholder')).to.equal(placeholder);
    expect(textField.prop('value')).to.equal(value);
  });

  it('should open options on select and attach event', () => {
    const onSelect = sinon.spy();
    const onChange = sinon.spy();
    const addEventListener = sinon.spy();
    const wrapper = shallow(
      <ContactImportInput
        options={options}
        onSelect={onSelect}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    );

    expect(wrapper.find('.pbg-contact-import-input-options').length).to.equal(0);
    const textField = wrapper.find(TextField);
    textField
      .dive()
      .find('input')
      .simulate('focus', { target: { addEventListener } });
    wrapper.update();

    expect(wrapper.find('.pbg-contact-import-input-options').length).to.equal(1);
    expect(wrapper.find(ContactImportInputOption).length).to.equal(3);
    expect(addEventListener.calledOnce).to.be.true;
  });

  it('should close options and stop event listening to event on blur', done => {
    const onSelect = sinon.spy();
    const onChange = sinon.spy();
    const addEventListener = sinon.spy();
    const removeEventListener = sinon.spy();
    const wrapper = shallow(
      <ContactImportInput
        options={options}
        onSelect={onSelect}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    );

    expect(wrapper.find('.pbg-contact-import-input-options').length).to.equal(0);
    const textField = wrapper.find(TextField);
    textField
      .dive()
      .find('input')
      .simulate('focus', { target: { addEventListener } });
    wrapper.update();

    expect(wrapper.find('.pbg-contact-import-input-options').length).to.equal(1);

    textField
      .dive()
      .find('input')
      .simulate('blur', { target: { removeEventListener } });

    setTimeout(() => {
      expect(wrapper.find('.pbg-contact-import-input-options').length).to.equal(0);
      expect(removeEventListener.calledOnce).to.be.true;
      done();
    }, 120);
  });

  it('should filter options by value', () => {
    const onSelect = sinon.spy();
    const onChange = sinon.spy();
    const addEventListener = sinon.spy();

    const wrapper = shallow(
      <ContactImportInput
        options={options}
        onSelect={onSelect}
        onChange={onChange}
        value="3"
        placeholder={placeholder}
      />
    );

    expect(wrapper.find('.pbg-contact-import-input-options').length).to.equal(0);
    const textField = wrapper.find(TextField);
    textField
      .dive()
      .find('input')
      .simulate('focus', { target: { addEventListener } });
    wrapper.update();

    expect(wrapper.find('.pbg-contact-import-input-options').length).to.equal(1);
    expect(wrapper.find(ContactImportInputOption).length).to.equal(1);
    expect(wrapper.find(ContactImportInputOption).prop('label')).to.equal(options[2].label);
  });

  it('should react on input change', () => {
    const onSelect = sinon.spy();
    const onChange = sinon.spy();
    const wrapper = shallow(
      <ContactImportInput
        options={options}
        onSelect={onSelect}
        onChange={onChange}
        value="3"
        placeholder={placeholder}
      />
    );

    const textField = wrapper.find(TextField);

    expect(onChange.calledOnce).to.be.false;

    textField
      .dive()
      .find('input')
      .simulate('change', { target: { value: 'qaq' } });

    expect(onChange.calledOnce).to.be.true;
  });

  it('should react on option click', () => {
    const onSelect = sinon.spy();
    const onChange = sinon.spy();
    const addEventListener = sinon.spy();
    const wrapper = shallow(
      <ContactImportInput
        options={options}
        onSelect={onSelect}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    );

    expect(wrapper.find('.pbg-contact-import-input-options').length).to.equal(0);
    const textField = wrapper.find(TextField);
    textField
      .dive()
      .find('input')
      .simulate('focus', { target: { addEventListener } });
    wrapper.update();

    const ops = wrapper.find(ContactImportInputOption);
    ops
      .at(0)
      .dive()
      .find('.pbg-contact-import-input-option')
      .simulate('click');

    expect(onSelect.calledOnce).to.be.true;
    expect(onChange.calledOnce).to.be.true;
  });
});
