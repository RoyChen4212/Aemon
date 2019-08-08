import React from 'react';
import classnames from 'classnames';

import FormField from '../form-field';
import Label from '../label';
import makeEvent from '../../../lib/make-event';

import './style.scss';

export const PICKER_EMPTY_VALUE = '__EmptyValue';

/** @extends React.Component */
class Picker extends FormField {
  baseClassName = 'pbg-form-field pbg-consumer-mobile pbg-picker';

  get value() {
    return this.adaptedProps.value || PICKER_EMPTY_VALUE;
  }

  onChange = ev => {
    if (ev.target.value === PICKER_EMPTY_VALUE) return this.adaptedProps.onChange(makeEvent(null));
    return this.adaptedProps.onChange(ev);
  };

  renderLabel() {
    const { required, label } = this.adaptedProps;
    return <div className="pbg-picker-select-label pbg-mobile-paragraph">
      <Label required={required}>{label}</Label>
    </div>;
  }

  renderSelect() {
    const { options = [], disabled } = this.adaptedProps;
    return (
      <select className="pbg-mobile-paragraph" onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus} value={this.value} disabled={disabled}>
        {options.map(({ label, value }) => (
          <option value={value || PICKER_EMPTY_VALUE} key={`option-${value || PICKER_EMPTY_VALUE}`}>
            {label}
          </option>
        ))}
      </select>
    );
  }

  renderHintOrError() {
    const { hint, error } = this.adaptedProps;
    return <span className={classnames('pbg-consumer-mobile', {'pbg-mobile-small-error': error, 'pbg-mobile-small-normal': !error})}>{error || hint}</span>
  }

  render() {
    const { hint, error, label } = this.adaptedProps;
    return (
      <div className={this.className}>
        {label && this.renderLabel()}
        <div className="pbg-picker-select-container">
          {this.renderSelect()}
          <i className="pbg-picker-arrow" />
        </div>
        {(hint || error) && this.renderHintOrError()}
      </div>
    );
  }
}

export default Picker;
