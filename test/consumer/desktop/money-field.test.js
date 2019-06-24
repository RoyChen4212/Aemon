import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { MoneyField, toCurrency } from '../../../components/consumer/desktop/money-field';
import { shouldBehaveLikeFormField } from '../shared/form-field.test';

export const shouldBehaveLikeTextField = wrapper => {
  it('should have class pbg-form-field', () => {
    expect(wrapper.hasClass('pbg-form-field')).to.be.true;
  });

  it('should have class pbg-text-field', () => {
    expect(wrapper.hasClass('pbg-text-field')).to.be.true;
  });

  it('should add pbg-form-field-focused class when focused', done => {
    wrapper.setProps({ focused: true }, () => {
      expect(wrapper.hasClass('pbg-form-field-focused')).to.be.true;
      done();
    });
  });

  it('should remove pbg-form-field-focused class when not focused', done => {
    wrapper.setProps({ focused: true }, () => {
      wrapper.setProps({ focused: false }, () => {
        expect(wrapper.hasClass('pbg-form-field-focused')).to.be.false;
        done();
      });
    });
  });
};

describe('money-field', () => {
  it('should have correct class', () => {
    const wrapper = shallow(<MoneyField />);
    expect(wrapper.html()).to.include('pbg-money-field');
  });

  shouldBehaveLikeTextField(shallow(<MoneyField />));
  shouldBehaveLikeFormField(shallow(<MoneyField error="some error" />));

  it('should render default value', () => {
    const wrapper = shallow(<MoneyField defaultValue={1234} />);
    expect(wrapper.find('input').prop('value')).to.equal('12.34');
  });

  it('should replace separator', () => {
    const wrapper = shallow(<MoneyField defaultValue={1234} separator="," />);
    expect(wrapper.find('input').prop('value')).to.equal('12,34');
  });

  it('should replace currency sign', () => {
    const wrapper = shallow(<MoneyField currencySign="£" />);
    expect(wrapper.find('i').html()).to.include('£');
  });

  it('should display at least four digits', () => {
    const wrapper = shallow(<MoneyField />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: '1' } });
    expect(wrapper.find('input').prop('value')).to.equal('00.01');
    input.simulate('change', { target: { value: '12' } });
    expect(wrapper.find('input').prop('value')).to.equal('00.12');
    input.simulate('change', { target: { value: '123' } });
    expect(wrapper.find('input').prop('value')).to.equal('01.23');
    input.simulate('change', { target: { value: '1234' } });
    expect(wrapper.find('input').prop('value')).to.equal('12.34');
    input.simulate('change', { target: { value: '12345' } });
    expect(wrapper.find('input').prop('value')).to.equal('123.45');
  });
});

describe('toCurrency', () => {
  it('should return default value', () => {
    expect(toCurrency()).to.equal('00.00');
  });

  it('should format currency', () => {
    expect(toCurrency(1234)).to.equal('12.34');
  });

  it('should use separator', () => {
    expect(toCurrency(1234, ',')).to.equal('12,34');
  });
});
