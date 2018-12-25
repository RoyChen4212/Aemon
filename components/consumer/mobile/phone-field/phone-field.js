import React from 'react';
import get from 'lodash/get';
import { HistoricalPicker, TextField } from '../form-fields';
import { SmallButton } from '../button';
import FormField from '../form-field';
import makeEvent from '../../../lib/make-event';
import './style.css';

class PhoneField extends FormField {
  baseClassName = 'pbg-form-field pbg-phone-field';
  state = {
    phoneTouched: false,
  }

  get className() {return this.baseClassName; }

  get addingNew() {
    const selected = get(this.props, 'value.selected');
    return selected === 'new';
  }

  get addNewButton() {
    if (this.addingNew) return null;
    return (
      <SmallButton onClick={() => this.updateValue({ selected: 'new' })}>
        {this.props.addNewButtonLabel}
      </SmallButton>
    );
  }

  get phoneError() {
    return this.state.phoneTouched ? get(this.props, 'error.phone') : null;
  }

  get newPhoneTextField() {
    if (!this.addingNew) return null;
    return (
      <TextField
        label={this.props.addPhoneLabel}
        onChange={(ev) => this.updateValue({ phone: ev.target.value})}
        onBlur={this.touchPhone}
        error={this.phoneError}
      />
    )
  }

  updateValue = (value) => {
    const newValue = {
      ...this.props.value,
      ...value,
    };
    this.onChange(makeEvent(newValue));
  }

  touchPhone = () => {
    const newState = { phoneTouched: true };
    this.setState(newState, () => {
      this.onBlur(makeEvent(this.props.value));
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div className={this.className}>
        <HistoricalPicker
          options={this.props.phoneOptions}
          value={get(this.props, 'value.selected')}
        />
        { this.newPhoneTextField }
        { this.addNewButton }
      </div>
    )
  }
}

export { PhoneField };
