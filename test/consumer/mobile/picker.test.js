import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { shouldBehaveLikeFormField } from './form-field.test';
import { Picker } from '../../../components/consumer/mobile/form-fields';
import Label, { labelTypes } from '../../../components/consumer/mobile/label';
import Hint, { hintTypes } from '../../../components/consumer/mobile/hint';

describe('Picker', () => {
  shouldBehaveLikeFormField(shallow(<Picker error="some error" />));

  it('should have correct class name', () => {
    const wrapper = shallow(<Picker />);
    expect(wrapper.hasClass('pbg-picker')).to.be.true;
  });

  it('should render a select', () => {
    const wrapper = shallow(<Picker />);
    expect(wrapper.find('select')).to.have.lengthOf(1);
  });

  it('should render given options', () => {
    const opts = [{ label: 'option 1', value: 'opt1' }, { label: 'option 2', value: 'opt2' }]
    const wrapper = shallow(<Picker options={opts}/>);
    expect(wrapper.find('select').find('option')).to.have.lengthOf(2);
    opts.forEach(opt => {
      const expected = <option value={opt.value}>{opt.label}</option>;
      expect(wrapper.find({ value: opt.value})).to.have.lengthOf(1);
    });
  });

  it('should render the correct label', () => {
    const labelText = 'Pick your posion';
    const wrapper = shallow(<Picker label={labelText} />);
    expect(wrapper.find('.pbg-picker').contains(<Label>{labelText}</Label>)).to.be.true;
  });

  it('should render the a hint if given', () => {
    const hintText = 'Pick your posion';
    const wrapper = shallow(<Picker hint={hintText} />);
    expect(wrapper.find('.pbg-picker').contains(<Hint>{hintText}</Hint>)).to.be.true;
  });

  it('should have correct class when error is given', () => {
    const wrapper = shallow(<Picker error="an error"/>);
    expect(wrapper.hasClass('pbg-form-field-error')).to.be.true;
  });

  it('should render the an error if given', () => {
    const error = 'terrible error';
    const wrapper = shallow(<Picker error={error} />);
    expect(wrapper.find('.pbg-picker').contains(<Hint type={hintTypes.ERROR}>{error}</Hint>)).to.be.true;
  });

  it('should render the an error if given despite a hint being passed', () => {
    const error = 'terrible error';
    const wrapper = shallow(<Picker error={error} hint='hint' />);
    expect(wrapper.find('.pbg-picker').contains(<Hint type={hintTypes.ERROR}>{error}</Hint>)).to.be.true;
  });

  it('should render a custom arrow element', () => {
    const wrapper = shallow(<Picker />);
    const el = wrapper.find('.pbg-picker')
      .find('.pbg-picker-select-container')
      .find('.pbg-picker-arrow');
    expect(el).to.have.lengthOf(1);
  });

  it('should use required label if required prop passed', () => {
    const labelText = 'Pick your posion';
    const wrapper = shallow(<Picker label={labelText} required />);
    expect(wrapper.find('.pbg-picker').contains(<Label required>{labelText}</Label>)).to.be.true;
  });

  it('should not use required label if required prop not passed', () => {
    const labelText = 'Pick your posion';
    const wrapper = shallow(<Picker label={labelText} />);
    expect(wrapper.find('.pbg-picker').contains(<Label required>{labelText}</Label>)).to.be.false;
  });

  it('should call onChange after select is changed', () => {
    const onChange = sinon.spy();
    const expected = { value: 'hi' };
    const wrapper = shallow(<Picker onChange={onChange} />);
    wrapper.find('select').simulate('change', expected);
    expect(onChange.calledOnce).to.be.true;
    expect(onChange.calledWith(expected)).to.be.true;
  });

  it('should select correct option when value is given', () => {
    const opts = [{ label: 'option 1', value: 'opt1' }, { label: 'option 2', value: 'opt2' }]
    const value = opts[1].value;
    const wrapper = shallow(<Picker options={opts} value={value} />);
    expect(wrapper.find('select').prop('value')).to.be.equal(value);
  });
});