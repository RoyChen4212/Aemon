import React from 'react';
import get from 'lodash/get';
import { TextField } from '../form-fields';
import AddOrSelectField from '../add-or-select-field';
import makeEvent from '../../../lib/make-event';
import touchField from '../../../lib/touch-field';
import './style.css';

class PhoneField extends AddOrSelectField {
  baseClassName = 'pbg-form-field pbg-phone-field';
  state = {
    phoneTouched: false,
  }

  constructor(props) {
    super(props);
    this.touchField = touchField.bind(this);
  }

  get options() { return this.adaptedProps.phoneOptions; }

  get phoneError() {
    return this.state.phoneTouched ? get(this.adaptedProps, 'error.phone') : null;
  }

  get field() {
    return (
      <TextField
        label={this.adaptedProps.addPhoneLabel}
        onChange={(ev) => this.updateValue({ phone: ev.target.value})}
        onBlur={this.touchPhone}
        error={this.phoneError}
      />
    )
  }

  touchPhone = () => {
    const newState = { phoneTouched: true };
    return this.touchField(newState);
  }
}

export { PhoneField };
