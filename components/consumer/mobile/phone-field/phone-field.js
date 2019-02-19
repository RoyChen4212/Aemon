import React from 'react';
import get from 'lodash/get';
import { TextField } from '../form-fields';
import AddOrSelectField from '../add-or-select-field';
import makeEvent from '../../../lib/make-event';
import './style.css';

class PhoneField extends AddOrSelectField {
  baseClassName = 'pbg-form-field pbg-phone-field';

  get options() { return this.adaptedProps.phoneOptions; }

  get phoneError() {
    return get(this.adaptedProps, 'error.phone');
  }

  get phoneValue() { return get(this.value, 'phone'); }

  get field() {
    return (
      <TextField
        label={this.adaptedProps.addPhoneLabel}
        onChange={(ev) => this.updateValue({ phone: ev.target.value})}
        value={this.phoneValue}
        onBlur={this.onBlur}
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        error={this.phoneError}
      />
    )
  }
}

export { PhoneField };
