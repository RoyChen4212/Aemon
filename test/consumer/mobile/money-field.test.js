import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import MoneyField from '../../../components/consumer/mobile/money-field';
import { shouldBehaveLikeFormField } from '../shared/form-field.test';
import { shouldBehaveLikeTextField } from './text-field.test';

describe('money-field', () => {
  shouldBehaveLikeTextField(shallow(<MoneyField />));
  shouldBehaveLikeFormField(shallow(<MoneyField error="some error" />));

  it('should have correct class', () => {
    const wrapper = shallow(<MoneyField />);
    expect(wrapper.hasClass('pbg-money-field')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<MoneyField className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should render placeholder', () => {
    const wrapper = shallow(<MoneyField />);
    expect(wrapper.find('input').prop('placeholder')).to.equal('$ 0.00');
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

  it('should pass onChange prop to input element', () => {
    const onChange = sinon.spy();
    const wrapper = shallow(<MoneyField onChange={onChange} />);
    wrapper.find('input').simulate('change', { target: { value: '1' } });
    expect(onChange.calledOnce).to.be.true;
  });

  it('should execute onBlur when clicked out of input', () => {
    const onBlur = sinon.spy();
    const wrapper = shallow(<MoneyField onBlur={onBlur} />);
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');
    expect(onBlur.calledOnce).to.be.true;
  });

  it('should execute onFocus if given', () => {
    const onFocus = sinon.spy();
    const wrapper = shallow(<MoneyField onFocus={onFocus} />);
    wrapper.find('input').simulate('focus');
    expect(onFocus.calledOnce).to.be.true;
  });
});
