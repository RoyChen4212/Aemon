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

class AddressField extends FormField {
  baseClassName = 'pbg-form-field pbg-address-field';

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

  get className() {
    let resultingClassName = this.baseClassName;

    if (this.focused) {
      resultingClassName += ' pbg-form-field-focused';
    }

    return resultingClassName;
  }

  get error() { return isEmpty(this.props.error) ? null : this.props.error; }

  get streetAddressError() { return this.extractError(STREET_ADDRESS); }

  get cityError() { return this.extractError(CITY); }

  get stateError() { return this.extractError(STATE); }

  get postalCodeError() { return this.extractError(POSTAL_CODE); }

  get countryError() { return this.extractError(COUNTRY); }

  get countryOptions() { return this.props.countryOptions || []; }

  get currentValue() { return this.props.value || {}; }

  extractError(fieldName) {
    const { error } = this.props;
    if (!error || this.state.touched[fieldName] === false) return;
    return error[fieldName];
  }

  onStreetAddressChange = (ev) => this.updateValue({ [STREET_ADDRESS]: ev.target.value })

  onCityChange = ev => this.updateValue({ [CITY]: ev.target.value })

  onStateChange = ev => this.updateValue({ [STATE]: ev.target.value })

  onPostalCodeChange = ev => this.updateValue({ [POSTAL_CODE]: ev.target.value })

  onCountryChange = ev => this.updateValue({ [COUNTRY]: ev.target.value })

  updateValue = (value) => {
    const newValue = { ...this.currentValue, ...value };
    this.onChange(makeEvent(newValue));
  }

  touchStreetAddress = () => this.touchField(STREET_ADDRESS)

  touchCity = () => this.touchField(CITY)

  touchState = () => this.touchField(STATE)

  touchPostalCode = () => this.touchField(POSTAL_CODE)

  touchField = (fieldName) => {
    const newState = { ...this.state };
    newState.touched[fieldName] = true;
    this.setState(newState, () => {
      this.onBlur(makeEvent(this.props.value))
    });
  }

  render() {
    return (
      <div className={this.className}>
        <TextField
          name={STREET_ADDRESS}
          label={this.props.streetAddressLabel}
          error={this.streetAddressError}
          onChange={this.onStreetAddressChange}
          onBlur={this.touchStreetAddress}
        />
        <TextField
          name={CITY}
          label={this.props.cityLabel}
          error={this.cityError}
          onChange={this.onCityChange}
          onBlur={this.touchCity}
        />
        <TextField
          name={STATE}
          label={this.props.stateLabel}
          error={this.stateError}
          onChange={this.onStateChange}
          onBlur={this.touchState}
        />
        <TextField
          name={POSTAL_CODE}
          label={this.props.postalCodeLabel}
          error={this.postalCodeError}
          onChange={this.onPostalCodeChange}
          onBlur={this.touchPostalCode}
        />
        <Picker
          name={COUNTRY}
          options={this.countryOptions}
          label={this.props.countryLabel}
          error={this.countryError}
          onChange={this.onCountryChange}
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

export { AddressField, fieldNames };
