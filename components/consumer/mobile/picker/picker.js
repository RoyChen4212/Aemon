import React from 'react';
import classnames from 'classnames';

import FormField from '../form-field';
import Label from '../label';
import makeEvent from '../../../lib/make-event';

import './style.scss';

export const PICKER_EMPTY_VALUE = '__EmptyValue';

class Picker extends FormField {
  baseClassName = 'pbg-form-field pbg-consumer-mobile pbg-picker';

  onChange = ev => {
    if (ev.target.value === PICKER_EMPTY_VALUE) return this.adaptedProps.onChange(makeEvent(null));
    return this.adaptedProps.onChange(ev);
  };

  get value() {
    return this.adaptedProps.value || PICKER_EMPTY_VALUE;
  }

  renderLabel() {
    const { required, label } = this.adaptedProps;
    return <div className="pbg-picker-select-label">
      <Label required={required}>{label}</Label>
    </div>;
  }

  renderSelect() {
    const { options = [], disabled } = this.adaptedProps;
    return (
      <select onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus} value={this.value} disabled={disabled}>
        {options.map(({ label, value }, i) => (
          <option value={value === null ? PICKER_EMPTY_VALUE : value} key={`option-${i}`}>
            {label}
          </option>
        ))}
      </select>
    );
  }

  renderHintOrError() {
    const { hint, error } = this.adaptedProps;
    return <span className={classnames('pbg-consumer-mobile', {'pbg-mobile-hint-error': error, 'pbg-mobile-hint-normal': !error})}>{error || hint}</span>
  }

  render() {
    return (
      <div className={this.className}>
        {this.renderLabel()}
        <div className="pbg-picker-select-container">
          {this.renderSelect()}
          <i className="pbg-picker-arrow" />
        </div>
        {this.renderHintOrError()}
      </div>
    );
  }
}

export default Picker;
