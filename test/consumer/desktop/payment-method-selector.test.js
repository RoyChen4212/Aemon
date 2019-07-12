import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import { shouldBehaveLikeFormField } from '../shared/form-field.test';
import PaymentMethodSelector from '../../../components/consumer/desktop/payment-method-selector';
import { PICKER_EMPTY_VALUE } from '../../../components/consumer/desktop/picker';
import { cardTypes } from '../../../components/consumer/desktop/card-field/card-field-types';
import Label from '../../../components/consumer/desktop/label';
import PaymentMethodSelectorMenu from '../../../components/consumer/desktop/payment-method-selector/payment-method-selector-menu';

const options = [
  { cardType: cardTypes[0], label: 'ending in XXXX (exp:mm/yy)', value: 'visa' },
  { cardType: cardTypes[1], label: 'ending in XXXX (exp:mm/yy)', value: 'master' },
  { cardType: cardTypes[2], label: 'ending in XXXX (exp:mm/yy)', value: 'american_express' },
  { cardType: cardTypes[3], label: 'ending in XXXX (exp:mm/yy)', value: 'discover' },
  { cardType: cardTypes[4], label: 'ending in XXXX (exp:mm/yy)', value: 'diners_club' },
  { cardType: null, label: 'Add new [term]', value: PICKER_EMPTY_VALUE },
];

describe('PaymentMethodSelector', () => {
  shouldBehaveLikeFormField(shallow(<PaymentMethodSelector options={options} value="visa" error="some error" />));

  it('should have correct class name', () => {
    const wrapper = shallow(<PaymentMethodSelector options={options} />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-form-field')).to.be.true;
    expect(wrapper.hasClass('pbg-picker')).to.be.true;
    expect(wrapper.hasClass('pbg-payment-method-selector')).to.be.true;
  });

  it('should render a button container', () => {
    const wrapper = shallow(<PaymentMethodSelector options={options} value="visa" />);
    expect(wrapper.find('.pbg-payment-method-selector-button-container')).to.have.lengthOf(1);
  });

  it('should render given options', () => {
    const wrapper = mount(<PaymentMethodSelector options={options} value="visa" />);
    expect(wrapper.find('.pbg-picker-menu').find('.picker-menu-item')).to.have.lengthOf(6);
  });

  it('should render the correct label', () => {
    const labelText = 'Pick your position';
    const wrapper = shallow(<PaymentMethodSelector label={labelText} options={options} value="visa" />);
    expect(wrapper.find('.pbg-payment-method-selector').contains(<Label>{labelText}</Label>)).to.be.true;
  });

  it('should have correct class when error is given', () => {
    const wrapper = shallow(<PaymentMethodSelector options={options} value="visa" error="an error" />);
    expect(wrapper.hasClass('pbg-form-field-error')).to.be.true;
  });

  it('should render a custom arrow element', () => {
    const wrapper = shallow(<PaymentMethodSelector options={options} value="visa" />);
    const el = wrapper
      .find('.pbg-payment-method-selector')
      .find('button')
      .find('.pbg-picker-arrow');
    expect(el).to.have.lengthOf(1);
  });

  it('should use required label if required prop passed', () => {
    const labelText = 'Pick your posion';
    const wrapper = shallow(<PaymentMethodSelector label={labelText} options={options} value="visa" required />);
    expect(wrapper.find('.pbg-payment-method-selector').contains(<Label required>{labelText}</Label>)).to.be.true;
  });

  it('should call onChange after select is changed', () => {
    const onChange = sinon.spy();
    const wrapper = mount(<PaymentMethodSelector onChange={onChange} options={options} value="visa" />);
    wrapper
      .find('.pbg-picker-menu')
      .find('.picker-menu-item')
      .at(0)
      .simulate('click');
    expect(onChange.calledOnce).to.be.true;
  });

  it('should return PAYMENT_METHOD_ADD_VALUE when value is add', () => {
    const wrapper = shallow(<PaymentMethodSelector value={PICKER_EMPTY_VALUE} />);
    expect(wrapper.instance().value).to.equal(PICKER_EMPTY_VALUE);
  });

  it('should select correct option when value is given', () => {
    const { value } = options[1];
    const wrapper = mount(<PaymentMethodSelector options={options} value={value} />);
    expect(wrapper.find('.pbg-picker-button').text()).to.be.equal(options[1].label);
  });

  it('should activate PaymentMethodSelectorMenu upon clicking button', () => {
    const wrapper = shallow(<PaymentMethodSelector options={options} value="visa" />);
    wrapper.find('.pbg-picker-button').simulate('click');
    expect(wrapper.find(PaymentMethodSelectorMenu).prop('active')).to.be.equal(true);
  });

  it('should deactivate PaymentMethodSelectorMenu upon blurring button', done => {
    const onBlur = wrapper => {
      expect(wrapper.find(PaymentMethodSelectorMenu).prop('active')).to.be.equal(false);
      done();
    };
    const wrapper = shallow(<PaymentMethodSelector options={options} value="visa" onBlur={() => onBlur(wrapper)} />);
    wrapper.find('.pbg-picker-button').simulate('click');
    expect(wrapper.find(PaymentMethodSelectorMenu).prop('active')).to.be.equal(true);
    wrapper.find('.pbg-picker-button').simulate('blur');
  });

  it('should not be activable when disabled', () => {
    const wrapper = shallow(<PaymentMethodSelector options={options} value="visa" disabled />);
    expect(wrapper.find(PaymentMethodSelectorMenu).prop('active')).to.be.equal(false);
    wrapper.find('.pbg-picker-button').simulate('click');
    expect(wrapper.find(PaymentMethodSelectorMenu).prop('active')).to.be.equal(false);
  });

  it('should not execute onButtonBlur code if disabled', () => {
    const wrapper = shallow(<PaymentMethodSelector options={options} value="visa" disabled />);
    expect(wrapper.instance().onButtonBlur()).to.be.false;
  });

  it('should select add_new item when "Add New" button is clicked', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<PaymentMethodSelector options={options} value="visa" onChange={onChange} />);
    wrapper
      .find('.pbg-payment-method-selector-add-container')
      .find('button')
      .simulate('click');
    expect(onChange.calledOnce).to.be.true;
  });
});
