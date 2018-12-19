import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AddressField } from '../../../components/consumer/mobile/form-fields';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

const countries = [
  { label: 'United States', value: 'us' },
  { label: 'Mexico', value: 'mx' },
  { label: 'Denmark', value: 'dk'},
]

const validate = (value) => {
  const errors = {};
  if (!value.streetAddress) {
    errors.streetAddress = 'Must type in your street address';
  }
  if (!value.city) {
    errors.city = 'is required';
  }
  console.log('Returning errors', errors)
  return errors;
};

storiesOf('Form Fields/Address Field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('No validations', () => (
    <FieldStateProvider
      component={AddressField}
      name="address-field"
      streetAddressLabel="Street address"
      cityLabel="City"
      stateLabel="State or province"
      postalCodeLabel="Postal code"
      countryLabel="Country"
      countryOptions={countries}
      onChange={action('onChange')}
    />
  ))
  .add('With required street and city', () => (
    <FieldStateProvider
      validate={validate}
      component={AddressField}
      name="address-field"
      streetAddressLabel="Street address"
      cityLabel="City"
      stateLabel="State or province"
      postalCodeLabel="Postal code"
      countryLabel="Country"
      countryOptions={countries}
      onChange={action('onChange')}
    />
  ));
