import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from '../date-picker';
import Label, { types as labelTypes } from '../label';
import makeEvent from '../../../lib/make-event';
import './style.scss';

class TimePicker extends DatePicker {
  baseClassName = 'pbg-form-field pbg-time-picker';

  get defaultFormater() { return defaultFormater; }

  render() {
    return (
      <div className={this.className}>
        {this.label}
        <div className="pbg-time-picker-container">
          <div className="pbg-time-picker-mask">
            {this.maskContents}
          </div>
          <input
            type="time"
            value={this.props.value || ''}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </div>
        {this.hintOrError}
      </div>
    )
  }
}

const defaultFormater = (time) => {
  if (!time) return 'hh:mm';
  return time;
};

export { TimePicker };
