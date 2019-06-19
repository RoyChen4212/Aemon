import React from 'react';

import find from 'lodash/find';
import get from 'lodash/get';
import FormField from '../form-field';
import PickerMenu from '../picker-menu';
import makeEvent from '../../../lib/make-event';

import './style.scss';

export const PICKER_EMPTY_VALUE = '__EmptyValue';

class Picker extends FormField {
  baseClassName = `pbg-consumer-desktop pbg-form-field pbg-picker
    ${this.adaptedProps.big ? ' pbg-picker-big' : ''}`;

  state = {
    active: false,
  };

  get labelText() {
    const opt = find(this.options, op => op.value === this.value);
    return opt ? opt.label.term : null;
  }

  get options() {
    return get(this.adaptedProps, 'options', []);
  }

  get value() {
    return this.adaptedProps.value === null ? PICKER_EMPTY_VALUE : this.adaptedProps.value;
  }

  onOptionClick = value => () => {
    const val = value === PICKER_EMPTY_VALUE ? null : value;
    clearTimeout(this.deactivateTimeout);
    this.onChange(makeEvent(val));
    this.deactivate();
  };

  activate = () => {
    if (this.disabled) return;
    this.setState({ active: true });
  };

  deactivate = (ev, callback) => {
    if (this.disabled) return false;
    this.deactivateTimeout = setTimeout(() => {
      this.setState({ active: false }, () => callback && callback(makeEvent(this.value)));
    }, 150);
    return true;
  };

  renderPickerButton() {
    const style = this.props.button ? 'pbg-picker-button' : 'pbg-picker-text';
    return (
      <button
        className={style}
        type="button"
        onFocus={this.onFocus}
        onClick={this.activate}
        onBlur={ev => this.deactivate(ev, this.onBlur)}
      >
        <span>{this.labelText}</span>
        <i className="pbg-picker-arrow" />
      </button>
    );
  }

  render() {
    return (
      <div className={this.className}>
        {!this.props.simple && this.label}
        <div className="pbg-picker-container">
          {this.renderPickerButton()}
          <PickerMenu
            options={this.options}
            active={this.state.active}
            selected={this.value}
            onOptionClick={this.onOptionClick}
          />
        </div>
        {!this.props.simple && this.hintOrError}
      </div>
    );
  }
}

export default Picker;
