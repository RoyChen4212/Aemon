import React from 'react';

import FormField from '../form-field';
import ComplexValueFormField from '../../shared/complex-value-form-field';
import PasswordField from '../password-field';
import Checkbox from '../checkbox';
import makeEvent from '../../../lib/make-event';

import './style.scss';

const ComposedFormField = ComplexValueFormField(FormField);

class GuestPasswordField extends ComposedFormField {
  baseClassName = 'pbg-consumer-desktop pbg-guest-password-field';

  onCheckboxChange = ev => {
    this.updateValue({ guest: ev.target.value });
  };

  onInputChange = ev => {
    this.updateValue({ password: ev.target.value });
  };

  renderHintWithCheckbox() {
    if (this.error) return null;
    if (!this.hint) return null;

    return (
      <div>
        <Checkbox
          label={this.hint}
          value={this.currentValue.guest}
          disabled={this.props.disabled}
          onChange={this.onCheckboxChange}
        />
      </div>
    );
  }

  render() {
    return (
      <div className={this.className}>
        <PasswordField
          label={this.adaptedProps.label}
          type={this.baseType}
          value={this.currentValue.password}
          hint={null}
          disabled={this.currentValue.guest || this.adaptedProps.disabled}
          onChange={this.onInputChange}
          onBlur={() => this.onBlur(makeEvent(this.currentValue))}
        />
        {this.renderHintWithCheckbox()}
      </div>
    );
  }
}

export default GuestPasswordField;
