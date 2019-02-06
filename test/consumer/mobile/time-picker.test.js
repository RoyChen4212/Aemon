import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { shouldBehaveLikeFormField } from '../shared/form-field.test';
import { TimePicker } from '../../../components/consumer/mobile/form-fields';
import Label, { labelTypes } from '../../../components/consumer/mobile/label';
import Hint, { hintTypes } from '../../../components/consumer/mobile/hint';

describe('Date picker', () => {
  shouldBehaveLikeFormField(shallow(<TimePicker error="some error" />));

  it('should have class pbg-time-picker', () => {
    const wrapper = shallow(<TimePicker />);
    expect(wrapper.hasClass('pbg-time-picker')).to.be.true;
  });

  it('should render an input with type date', () => {
    const wrapper = shallow(<TimePicker />);
    expect(wrapper.find('input').html()).to.include('type="time"');
  });

  it('should call onChange event when date input changes', () => {
    const onChange = sinon.spy();
    const event = { target: { value: 'expected value' } };
    const wrapper = shallow(<TimePicker onChange={onChange} />);
    wrapper.find('input').simulate('change', event);
    expect(onChange.calledOnce).to.be.true;
  });

  it('should call onChange with correct value when date input changes', function (done) {
    const expected = '12:22';
    const event = { target: { value: expected } };
    const onChange = ev => {
      expect(ev.target.value).to.equal(expected);
      done();
    };
    const wrapper = shallow(<TimePicker onChange={onChange} />);
    wrapper.find('input').simulate('change', event);
  });

  it('should call onBlur event when date input loses focus', () => {
    const onBlur = sinon.spy();
    const expected = 'expected value';
    const wrapper = shallow(<TimePicker onBlur={onBlur} />);
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('blur');
    expect(onBlur.calledOnce).to.be.true;
  });

  it('should execute formater provided for feedback', () => {
    const formater = sinon.spy();
    const wrapper = shallow(<TimePicker formater={formater} />);
    expect(formater.calledOnce).to.be.true;
  });

  it('should execute default formater if none provided for feedback', () => {
    const wrapper = shallow(<TimePicker />);
    const expected = <Label type={labelTypes.SECONDARY}>hh:mm</Label>
    expect(wrapper.find('.pbg-time-picker-mask').contains(expected)).to.be.true;
  });

  it('should pass value to input', () => {
    const time = '23:45';
    const wrapper = shallow(<TimePicker value={time} />);
    expect(wrapper.find('input').prop('value')).to.equal(time);
  });

  it('should execute default formater if none provided for feedback with value', () => {
    const date = '23:45';
    const wrapper = shallow(<TimePicker value={date} />);
    const expected = <Label type={labelTypes.SECONDARY}>23:45</Label>
    expect(wrapper.find('.pbg-time-picker-mask').contains(expected)).to.be.true;
  });

  it('should provide correct feedback with small time numbers', () => {
    const date = '04:20';
    const wrapper = shallow(<TimePicker value={date} />);
    const expected = <Label type={labelTypes.SECONDARY}>04:20</Label>
    expect(wrapper.find('.pbg-time-picker-mask').contains(expected)).to.be.true
  });

  it('should add a label with given text', () => {
    const wrapper = shallow(<TimePicker label="A label" />);
    const expected = <Label>A label</Label>
    expect(wrapper.find('.pbg-time-picker').contains(expected)).to.be.true
  });

  describe('With error', () => {
    it('should show an error hint when error is given', () => {
      const expected = 'a horrible error';
      const wrapper = shallow(<TimePicker error={expected} />);
      expect(wrapper.contains(<Hint type={hintTypes.ERROR}>{expected}</Hint>)).to.be.true;
    });

    it('should have correct class when error is given', () => {
      const wrapper = shallow(<TimePicker error="an error" />);
      expect(wrapper.hasClass('pbg-form-field-error')).to.be.true;
    });

    it('should show an error over a hint when error is given', () => {
      const expected = 'a horrible error';
      const hint = 'nope';
      const wrapper = shallow(<TimePicker error={expected} hint={hint} />);
      expect(wrapper.contains(<Hint type={hintTypes.ERROR}>{expected}</Hint>)).to.be.true;
      expect(wrapper.contains(<Hint>{hint}</Hint>)).to.be.false;
    });

    it('should show an error label when error is given', () => {
      const expected = 'A label';
      const wrapper = shallow(<TimePicker error='and error' label={expected} />);
      expect(wrapper.contains(<Label type={labelTypes.ERROR}>{expected}</Label>)).to.be.true;
    });
  });
});
