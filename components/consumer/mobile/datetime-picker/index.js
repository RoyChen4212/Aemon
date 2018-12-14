import React from 'react';
import moment from 'moment-timezone';
import FormField from '../form-field';
import Label, { types as labelTypes } from '../label';
import Hint, { types as hintTypes } from '../hint';
import { DatePicker, TimePicker } from '../form-fields';
import makeEvent from '../../../lib/make-event';
import './style.scss';

class DatetimePicker extends FormField {
  baseClassName = 'pbg-form-field pbg-datetime-picker';

  state = {
    dateValue: '',
    timeValue: '',
  }

  static getDerivedStateFromProps(props) {
    let date = props.value;
    if (!date) return {};

    if (date.constructor.name !== Date) {
      date = new Date(date)
    }

    const derivedState = {
      dateValue: toDatePickerString(date),
      timeValue: toTimePickerString(`${date.getHours()}:${date.getMinutes()}`),
    };

    return derivedState;
  }

  get timezone() {
    return this.props.timezone;
  }

  onValueUpdated = () => {
    const newDate = moment(this.state.dateValue + `T${this.state.timeValue}:00`)
      .tz(this.timezone)
      .format();

    this.onBlur(makeEvent(new Date(newDate)));
    this.onChange(makeEvent(new Date(newDate)));
  }

  updateValue({ date, time }) {
    const updateState = (state, props) => {
      const { dateValue, timeValue } = this.state;
      const defaultDate = new Date(moment().tz(this.timezone).format());

      const newState = {
        dateValue: date.length ? date : toDatePickerString(defaultDate),
        timeValue: time.length ? toTimePickerString(time) : '00:00',
      };

      return newState;
    };

    this.setState(updateState, this.onValueUpdated);
  }

  onChangeDateValue = (ev) => {
    console.log('onChangeDateValue', ev.target.value)
    this.updateValue({ date: ev.target.value, time: this.state.timeValue });
  }

  onChangeTimeValue = (ev) => {
    this.updateValue({ date: this.state.dateValue, time: ev.target.value });
  }

  render() {
    return (
      <div className={this.className}>
        {this.label}
        <div className="pbg-datetime-picker-pickers-wrapper">
          <div className="pbg-datetime-picker-container">
          <DatePicker value={this.state.dateValue} onChange={this.onChangeDateValue} />
          </div>
          <div className="pbg-datetime-picker-container">
          <TimePicker value={this.state.timeValue} onChange={this.onChangeTimeValue} />
          </div>
        </div>
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
