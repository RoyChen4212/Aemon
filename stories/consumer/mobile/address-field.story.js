import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { AddressField } from '../../../components/consumer/mobile/form-fields';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=134%3A5665';

const countries = [
  { label: 'United States', value: 'us' },
  { label: 'Mexico', value: 'mx' },
  { label: 'Denmark', value: 'dk'},
]

const addressOptions = [
  {label: '472 Evergreen Terrace', value: 'first'},
  {label: '880 Harrison St, Suite 303C', value: 'second'},
  {label: 'Add new address', value: 'new'},
];

const validate = (value) => {
  const errors = {};
  if (!value.streetAddress) {
    errors.streetAddress = 'Must type in your street address';
  }
  if (!value.city) {
    errors.city = 'is required';
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

storiesOf('Consumer/Mobile/Form Fields/Address Field', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('No validations', () => (
    <FieldStateProvider
      component={AddressField}
      name="new-address-field"
      addressOptions={addressOptions}
      newAddressLabels={labels}
      addNewButtonLabel="Add new"
      countryOptions={countries}
      onChange={action('onChange')}
    />
  ))
  .add('With required street and city', () => (
    <FieldStateProvider
      validate={validate}
      component={AddressField}
      name="new-address-field"
      addressOptions={addressOptions}
      newAddressLabels={labels}
      addNewButtonLabel="Add new"
      countryOptions={countries}
      onChange={action('onChange')}
    />
  ));
