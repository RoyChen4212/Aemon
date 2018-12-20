import React from 'react';
import { get, first, isEmpty } from 'lodash';
import { TextField, Picker } from '../form-fields';
import FormField from '../form-field';
import makeEvent from '../../../lib/make-event';
import './style.scss';

const STREET_ADDRESS = 'streetAddress';
const CITY = 'city';
const STATE = 'state';
const POSTAL_CODE = 'postalCode';
const COUNTRY = 'country';

class NewAddressField extends FormField {
  baseClassName = 'pbg-form-field pbg-new-address-field';

  state = {
    touched: {
      [STREET_ADDRESS]: false,
      [CITY]: false,
      [STATE]: false,
      [POSTAL_CODE]: false,
    }
  }

  componentDidMount() {
    if (!this.currentValue.country && this.countryOptions.length) {
      const newValue = { ...this.currentValue, country: get(first(this.countryOptions), 'value') };
      this.onChange(makeEvent(newValue));
    }
  }

  get className() {return this.baseClassName; }

  get countryOptions() { return this.props.countryOptions || []; }

  get currentValue() { return this.props.value || {}; }

  extractLabel(fieldName) {
    return get(this.props, `labels.${fieldName}`, '');
  }

  extractError(fieldName) {
    const { error } = this.props;
    if (!error || this.state.touched[fieldName] === false) return;
    return error[fieldName];
  }

  updateValue = (value) => {
    const newValue = { ...this.currentValue, ...value };
    this.onChange(makeEvent(newValue));
  }

  touchField = (fieldName) => {
    const newState = { ...this.state };
    newState.touched[fieldName] = true;
    this.setState(newState, () => {
      this.onBlur(makeEvent(this.props.value))
      this.forceUpdate()
    });
  }

  textFieldFor(fieldName) {
    return (
      <TextField
        name={fieldName}
        label={this.extractLabel(fieldName)}
        error={this.extractError(fieldName)}
        onChange={ev => this.updateValue({ [fieldName]: ev.target.value })}
        onBlur={() => this.touchField(fieldName)}
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
