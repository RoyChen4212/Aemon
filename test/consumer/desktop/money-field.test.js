import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import MoneyField from '../../../components/consumer/desktop/money-field';
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
    expect(wrapper.hasClass('pbg-form-field')).to.be.true;
  });

  shouldBehaveLikeTextField(shallow(<MoneyField />));
  shouldBehaveLikeFormField(shallow(<MoneyField error="some error" />));

  it('should render placeholder', () => {
    const wrapper = shallow(<MoneyField />);
    expect(wrapper.find('input').prop('placeholder')).to.equal('$ 0.00');
  });

  it('should have correct className when provided', () => {
    const className = 'className';
    const wrapper = shallow(<MoneyField className={className} />);
    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should render default value', () => {
    const wrapper = shallow(<MoneyField defaultValue={1234} />);
    expect(wrapper.find('input').prop('value')).to.equal('$ 12.34');
  });

  it('should replace currency sign', () => {
    const wrapper = shallow(<MoneyField currency="GBP" defaultValue={1234} />);
    expect(wrapper.find('input').prop('value')).to.equal('£ 12.34');
  });

  it('should display currency abbreviation', () => {
    const wrapper = shallow(<MoneyField currency="CHF" defaultValue={1234} />);
    expect(wrapper.find('input').prop('value')).to.equal('CHF 12.34');
  });

  it('should format currency', () => {
    const wrapper = shallow(<MoneyField />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: '1' } });
    expect(wrapper.find('input').prop('value')).to.equal('$ 0.01');
    input.simulate('change', { target: { value: '12' } });
    expect(wrapper.find('input').prop('value')).to.equal('$ 0.12');
    input.simulate('change', { target: { value: '123' } });
    expect(wrapper.find('input').prop('value')).to.equal('$ 1.23');
    input.simulate('change', { target: { value: '1234' } });
    expect(wrapper.find('input').prop('value')).to.equal('$ 12.34');
    input.simulate('change', { target: { value: '12345' } });
    expect(wrapper.find('input').prop('value')).to.equal('$ 123.45');
  });
});
