import React from 'react';
import { get, first, isEmpty } from 'lodash';
import { TextField, Picker } from '../form-fields';
import FormField from '../form-field';
import makeEvent from '../../../lib/make-event';
import './style.css';

const STREET_ADDRESS = 'streetAddress';
const CITY = 'city';
const STATE = 'state';
const POSTAL_CODE = 'postalCode';
const COUNTRY = 'country';

class NewAddressField extends FormField {
  baseClassName = 'pbg-form-field pbg-new-address-field';

  get className() {return this.baseClassName; }

  get countryOptions() { return this.adaptedProps.countryOptions || []; }

  get currentValue() { return this.adaptedProps.value || {}; }

  extractLabel(fieldName) {
    return get(this.adaptedProps, `labels.${fieldName}`, '');
  }

  extractError(fieldName) {
    const { error } = this.adaptedProps;
    if (!error) return;
    return error[fieldName];
  }

  updateValue = (value) => {
    const newValue = { ...this.currentValue, ...value };
    this.onChange(makeEvent(newValue));
  }

  textFieldFor(fieldName) {
    return (
      <TextField
        name={fieldName}
        value={this.currentValue[fieldName] || ''}
        label={this.extractLabel(fieldName)}
        error={this.extractError(fieldName)}
        onChange={ev => this.updateValue({ [fieldName]: ev.target.value })}
        onFocus={this.onFocus}
        onBlur={() => this.onBlur(makeEvent(this.currentValue))}
      />
    );
  }

  render() {
    return (
      <div className={this.className}>
        {this.textFieldFor(STREET_ADDRESS)}
        {this.textFieldFor(CITY)}
        {this.textFieldFor(STATE)}
        {this.textFieldFor(POSTAL_CODE)}
        <Picker
          name={COUNTRY}
          options={this.countryOptions}
          value={this.currentValue[COUNTRY]}
          label={this.extractLabel(COUNTRY)}
          error={this.extractError(COUNTRY)}
          onChange={ev => this.updateValue({ [COUNTRY]: ev.target.value })}
        />
      </div>
    )
  }
}

const fieldNames = {
  STREET_ADDRESS,
  CITY,
  STATE,
  POSTAL_CODE,
  COUNTRY,
};

export { NewAddressField, fieldNames };
