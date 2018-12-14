import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import moment from 'moment-timezone';
import sinon from 'sinon';

import { shouldBehaveLikeFormField } from './form-field.test';
import {
  DatetimePicker,
  DatePicker,
  TimePicker
} from '../../../components/consumer/mobile/form-fields';
import Label, { types as labelTypes } from '../../../components/consumer/mobile/label';
import Hint, { types as hintTypes } from '../../../components/consumer/mobile/hint';

describe('Datetime picker', () => {
  const timezone = 'America/Mexico_City';
  shouldBehaveLikeFormField(shallow(<DatetimePicker error="some error" timezone={timezone} />));

  it('should have class pbg-datetime-picker', () => {
    const wrapper = shallow(<DatetimePicker timezone={timezone} />);
    expect(wrapper.hasClass('pbg-datetime-picker')).to.be.true;
  });

  it('should render date picker component', () => {
    const wrapper = shallow(<DatetimePicker timezone={timezone} />);
    expect(wrapper.find(DatePicker)).to.have.lengthOf(1);
  });

  it('should render a time picker component', () => {
    const wrapper = shallow(<DatetimePicker timezone={timezone} />);
    expect(wrapper.find(TimePicker)).to.have.lengthOf(1);
  });

  describe('Composed behaviour', () => {
    it('should execute onChange when DatePicker changes', () => {
      const onChange = sinon.spy();
      const event = { target: { value: '1984-10-19' }};
      const wrapper = mount(<DatetimePicker onChange={onChange} timezone={timezone} />);
      wrapper.find('input[type="date"]').simulate('change', event);
      expect(onChange.calledOnce).to.be.true;
    });

    it('should execute onChange when TimePicker changes', () => {
      const onChange = sinon.spy();
      const event = { target: { value: '22:12' }};
      const wrapper = mount(<DatetimePicker onChange={onChange} timezone={timezone} />);
      wrapper.find('input[type="time"]').simulate('change', event);
      expect(onChange.calledOnce).to.be.true;
    });

    it('should execute onChange with correct date value from DatePicker component', function(done) {
      const event = { target: { value: '1984-10-19' }};
      const expected = new Date(moment('1984-10-19T00:00').tz(timezone));
      const onChange = (ev) => {
        expect(ev.target.value.getTime()).to.equal(expected.getTime());
        done();
      }
      const wrapper = mount(<DatetimePicker timezone={timezone} onChange={onChange} />);
      wrapper.find('input[type="date"]').simulate('change', event);
    });

    it('should execute onChange with correct time value from TimePicker component', function(done) {
      const event = { target: { value: '12:22' }};
      const expected = new Date(moment('1984-10-19T12:22').tz(timezone));
      const initialValue = new Date(moment('1984-10-19T00:00').tz(timezone));
      const onChange = (ev) => {
        expect(ev.target.value.getTime()).to.equal(expected.getTime());
        done();
      }
      const wrapper = mount(
        <DatetimePicker value={initialValue} onChange={onChange} timezone={timezone} />
      );
      wrapper.find('input[type="time"]').simulate('change', event);
    });
  });

});
