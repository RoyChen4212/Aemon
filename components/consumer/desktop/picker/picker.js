import React from 'react';

import find from 'lodash/find';
import get from 'lodash/get';
import FormField from '../form-field';
import Label, { labelTypes } from '../label';
import Hint, { hintTypes } from '../hint';
import makeEvent from '../../../lib/make-event';

import './style.css';

export const PICKER_EMPTY_VALUE = '__EmptyValue';

class Picker extends FormField {
  baseClassName = `pbg-consumer-desktop pbg-form-field pbg-picker
    ${this.adaptedProps.big ? ' pbg-picker-big' : ''}`;

  state = {
    active: false,
  }

  get labelText() {
    const opt = find(this.options, opt => opt.value === this.value);
    return opt ? opt.label : '';
  }

  get options() {
    return get(this.adaptedProps, 'options', []);
  }

  get value() {
    return this.adaptedProps.value === null ? PICKER_EMPTY_VALUE : this.adaptedProps.value;
  }

  onOptionClick = (value) => () => {
    const val = value === PICKER_EMPTY_VALUE ? null : value;
    clearTimeout(this.deactivateTimeout);
    this.onChange(makeEvent(val));
    this.deactivate();
  };

  activate = () => {
    if (this.disabled) return
    this.setState({ active: true });
  }

  deactivate = (ev, callback) => {
    if (this.disabled) return false;
    this.deactivateTimeout = setTimeout(() => {
      this.setState({ active: false }, () => callback && callback(makeEvent(this.value)));
    }, 150);
  }

  renderPickerButton() {
    return (
      <button type="button" onFocus={this.onFocus} onClick={this.activate} onBlur={ev => this.deactivate(ev, this.onBlur)}>
        {this.labelText}
        <i className="pbg-picker-arrow" />
      </button>
    )
  }

  renderOption = ({ value, label }) => {
    const selected = value === this.value ? 'selected' : '';
    return (
      <div className={`picker-item ${selected}`} key={value} onClick={this.onOptionClick(value)}>
        <Label>{label}</Label>
      </div>
    );
  }

  render() {
    return (
      <div className={this.className}>
        {!this.props.simple && this.label}
        <div className="pbg-picker-container">
          {this.renderPickerButton()}
          <div className={`picker-menu ${this.state.active ? 'active' : ''}`}>
            {this.options.map(this.renderOption)}
          </div>
        </div>
        {!this.props.simple && this.hintOrError}
      </div>
    );
  }
};

export default Picker;