import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FieldStateProvider from '../../util/field-state-provider';
import NewAddressField from '../../../components/consumer/desktop/new-address-field';
import { PICKER_EMPTY_VALUE } from '../../../components/consumer/desktop/picker';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const countries = [
  { label: { term: 'Choose...' }, value: PICKER_EMPTY_VALUE },
  { label: { term: 'United States' }, value: 'us' },
  { label: { term: 'Mexico' }, value: 'mx' },
  { label: { term: 'Denmark' }, value: 'dk' },
];

const validate = value => {
  const errors = {};
  if (!value.streetAddress) {
    errors.streetAddress = 'Must type in your street address';
  }
  if (!value.city) {
    errors.city = 'required';
  }

  return errors;
};

const labels = {
  streetAddress: 'Street address',
  city: 'City',
  state: 'State',
  postalCode: 'Postal code',
  country: 'Country',
};

storiesOf('Consumer/Desktop/address-field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('special-field/default', () => (
    <FieldStateProvider
      validate={validate}
      component={NewAddressField}
      name="new-address-field"
      label="Shipping Address"
      labels={labels}
      value={{ country: PICKER_EMPTY_VALUE }}
      countryOptions={countries}
      onChange={action('onChange')}
    />
  ))
  .add('template-field/default', () => (
    <FieldStateProvider
      validate={validate}
      component={NewAddressField}
      name="new-address-field"
      label="Shipping Address"
      hint="Optional description text determined by Merchant"
      labels={labels}
      value={{ country: PICKER_EMPTY_VALUE }}
      countryOptions={countries}
      onChange={action('onChange')}
    />
  ));
