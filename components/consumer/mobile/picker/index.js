import React from 'react';

import FormField from '../form-field';
import Label, { labelTypes } from '../label';
import Hint, { hintTypes } from '../hint';

import './style.css';

class Picker extends FormField {
  baseClassName = 'pbg-form-field pbg-picker';

  get label() {
    return (
      <Label required={this.props.required}>{this.props.label}</Label>
    )
  }

  get select() {
    const { options = [] } = this.props;
    return (
      <select onChange={this.props.onChange}>
        {
          options.map(({ label, value }, i) => (
            <option value={value} key={`option-${i}`} selected={this.props.value === value}>
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
