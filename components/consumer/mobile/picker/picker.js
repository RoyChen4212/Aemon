import React from 'react';

import FormField from '../form-field';
import Label, { labelTypes } from '../label';
import Hint, { hintTypes } from '../hint';
import makeEvent from '../../../lib/make-event';

import './style.css';

export const PICKER_EMPTY_VALUE = '__EmptyValue';

class Picker extends FormField {
  baseClassName = 'pbg-form-field pbg-picker';

  onChange = (ev) => {
    if (ev.target.value === PICKER_EMPTY_VALUE) return this.props.onChange(makeEvent(null));
    return this.props.onChange(ev);
  }

  get label() {
    return (
      <Label required={this.props.required}>{this.props.label}</Label>
    )
  }

  get value() {
    return this.props.value === null ? PICKER_EMPTY_VALUE : this.props.value;
  }

  get select() {
    const { options = [] } = this.props;
    return (
      <select onChange={this.onChange} onBlur={this.props.onBlur} value={this.value}>
        {
          options.map(({ label, value }, i) => (
            <option value={value === null ? PICKER_EMPTY_VALUE : value} key={`option-${i}`}>
              {label}
            </option>
          ))
        }
      </select>
    );
  }

  render() {
    return (
      <div className={this.className}>
        <div className="pbg-picker-select-container">
          {this.label}
          {this.select}
          <i className="pbg-picker-arrow" />
        </div>
        {this.hintOrError}
      </div>
    );
  }
};

export { Picker };
