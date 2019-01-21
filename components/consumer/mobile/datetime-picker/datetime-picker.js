import React from 'react';
import moment from 'moment-timezone';
import FormField from '../form-field';
import Label, { labelTypes } from '../label';
import Hint, { hintTypes } from '../hint';
import { DatePicker, TimePicker } from '../form-fields';
import {
  generateNewValue,
  applyDateToValue,
  applyTimeToValue,
} from './value-generator';
import makeEvent from '../../../lib/make-event';

import './style.css';

class DatetimePicker extends FormField {
  baseClassName = 'pbg-form-field pbg-datetime-picker';

  state = {
    dateValue: '',
    timeValue: '',
  }

  static getDerivedStateFromProps(props) {
    const { adapter } = props;
    const date = adapter ? adapter(props).value : props.value;
    if (!date) return {};

    return {
      dateValue: toDatePickerString(date),
      timeValue: toTimePickerString(`${date.getHours()}:${date.getMinutes()}`),
    };
  }

  get timezone() {
    return this.adaptedProps.timezone;
  }

  onChangeDateValue = (ev) => {
    const { value: currentValue } = this.adaptedProps;
    const newValue = currentValue ?
      applyDateToValue(currentValue, ev.target.value, this.timezone) :
      generateNewValue(ev.target.value, null, this.timezone);

    this.onChange(makeEvent(newValue));
    this.onBlur(makeEvent(newValue));
  }

  onChangeTimeValue = (ev) => {
    const { value: currentValue } = this.adaptedProps;
    const newValue = currentValue ?
      applyTimeToValue(currentValue, ev.target.value, this.timezone) :
      generateNewValue(null, ev.target.value, this.timezone);

    this.onChange(makeEvent(newValue));
    this.onBlur(makeEvent(newValue));
  }

  get pickers() {
    const components = [
      <DatePicker value={this.state.dateValue} onChange={this.onChangeDateValue} />,
      <TimePicker value={this.state.timeValue} onChange={this.onChangeTimeValue} />,
    ];

    return components.map((comp, key) => (
      <div className="pbg-datetime-picker-container" key={`comp-${key}`}>{comp}</div>
    ));
  }

  render() {
    return (
      <div className={this.className}>
        {this.label}
        <div className="pbg-datetime-picker-pickers-wrapper">{this.pickers}</div>
        {this.hintOrError}
      </div>
    )
  }
};

const toDatePickerString = (date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${date.getFullYear()}-${month}-${day}`;
};

const toTimePickerString = (date) => {
  const split = date.split(':');
  const hours = split[0].length < 2 ? `0${split[0]}` : split[0];
  const mins = split[1].length < 2 ? `0${split[1]}` : split[1];
  return `${hours}:${mins}`;
};


export { DatetimePicker };
