import React from 'react';
import get from 'lodash/get';
import { TextField } from '../form-fields';
import AddOrSelectField from '../add-or-select-field';
import makeEvent from '../../../lib/make-event';
import './style.css';

class PhoneField extends AddOrSelectField {
  baseClassName = 'pbg-form-field pbg-phone-field';

  state = {
    touched: false,
  }

  onBlur = (ev) => {
    this.setState({ touched: true }, () => {
      if (this.adaptedProps.onBlur) this.adaptedProps.onBlur(ev);
    });
  }

  get currentValue() { return this.adaptedProps.value || {}; }

  get options() { return this.adaptedProps.phoneOptions; }

  get phoneError() {
    const forceDisplay = get(this.adaptedProps, 'forceErrorDisplay', false);
    const message = get(this.adaptedProps, 'error.phone')
    if (message && forceDisplay) return message;
    if (message && this.state.touched) return message;
  }

  get phoneValue() { return get(this.value, 'phone'); }

  get field() {
    return (
      <TextField
        label={this.adaptedProps.addPhoneLabel}
        onChange={(ev) => this.updateValue({ phone: ev.target.value})}
        onBlur={() => this.onBlur(makeEvent(this.currentValue))}
        value={this.phoneValue}
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        error={this.phoneError}
      />
    )
  }
}

export { PhoneField };
