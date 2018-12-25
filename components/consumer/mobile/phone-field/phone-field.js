import React from 'react';
import get from 'lodash/get';
import { TextField } from '../form-fields';
import AddOrSelectField from '../add-or-select-field';
import makeEvent from '../../../lib/make-event';
import './style.css';

class PhoneField extends AddOrSelectField {
  baseClassName = 'pbg-form-field pbg-phone-field';
  state = {
    phoneTouched: false,
  }

  get options() { return this.props.phoneOptions; }

  get phoneError() {
    return this.state.phoneTouched ? get(this.props, 'error.phone') : null;
  }

  get field() {
    return (
      <TextField
        label={this.props.addPhoneLabel}
        onChange={(ev) => this.updateValue({ phone: ev.target.value})}
        onBlur={this.touchPhone}
        error={this.phoneError}
      />
    )
  }

  touchPhone = () => {
    const newState = { phoneTouched: true };
    this.setState(newState, () => {
      this.onBlur(makeEvent(this.props.value));
      this.forceUpdate();
    });
  }
}

export { PhoneField };
