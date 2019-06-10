import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import { Checkbox, MultiSelectField } from '../../../components/consumer/mobile/form-fields';
import { shouldBehaveLikeFormField } from '../shared/form-field.test';
import Label from '../../../components/consumer/mobile/label';
import Hint, { hintTypes } from '../../../components/consumer/mobile/hint';

describe('MultiSelectField', () => {
  const options = [{ label: 'Option 1', value: 'opt1' }, { label: 'Option 2', value: 'opt2' }];

  shouldBehaveLikeFormField(shallow(<MultiSelectField error="some error" />));

  it('should have correct class', () => {
    const wrapper = shallow(<MultiSelectField />);
    expect(wrapper.hasClass('pbg-multi-select-field')).to.be.true;
  });

  it('should have a checkbox for each option provided', () => {
    const wrapper = shallow(<MultiSelectField options={options} />);
    expect(wrapper.find(Checkbox)).to.have.lengthOf(2);
  });

  it('should give each checkbox its correct label', () => {
    const wrapper = shallow(<MultiSelectField options={options} />);
    expect(wrapper.find(Checkbox).get(0).props.label).to.equal(options[0].label);
    expect(wrapper.find(Checkbox).get(1).props.label).to.equal(options[1].label);
  });

  it('should have a label if given', () => {
    const expected = 'Pick one or more';
    const wrapper = shallow(<MultiSelectField label={expected} />);
    expect(wrapper.contains(<Label>{expected}</Label>)).to.be.true;
  });

  it('should not have a label if not given', () => {
    const wrapper = shallow(<MultiSelectField />);
    expect(wrapper.find(Label)).to.have.lengthOf(0);
  });

  it('should have a hint if given', () => {
    const expected = 'Pick one or more';
    const wrapper = shallow(<MultiSelectField hint={expected} />);
    expect(wrapper.contains(<Hint>{expected}</Hint>)).to.be.true;
  });

  it('should have error hint if error given', () => {
    const expected = 'an error';
    const wrapper = shallow(<MultiSelectField error={expected} />);
    expect(wrapper.contains(<Hint type={hintTypes.ERROR}>{expected}</Hint>)).to.be.true;
  });

  it('should return value with a list of all selected values', function(done) {
    const onChange = ev => {
      expect(ev.target.value).to.eql(['opt1']);
      done();
    };
    const wrapper = mount(<MultiSelectField onChange={onChange} options={options} />);
    const event = { target: { checked: true } };
    wrapper.find({ type: 'checkbox', name: 'checkbox_0' }).simulate('change', event);
  });

  it('should return value with a list of all selected values', function(done) {
    const onChange = ev => {
      expect(ev.target.value).to.eql([options[1].value]);
      done();
    };
    const value = [options[1].value, options[0].value];
    const wrapper = mount(<MultiSelectField onChange={onChange} options={options} value={value} />);
    const event = { target: { checked: false } };
    wrapper.find({ type: 'checkbox', name: 'checkbox_0' }).simulate('change', event);
  });

  it('should pass value to checkboxes', () => {
    const wrapper = shallow(<MultiSelectField options={options} value={[options[1].value]} />);
    expect(wrapper.find(Checkbox).get(0).props.value).to.be.false;
    expect(wrapper.find(Checkbox).get(1).props.value).to.equal(true);
  });
});
