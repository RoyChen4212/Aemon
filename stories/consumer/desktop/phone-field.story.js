import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PhoneField from '../../../components/consumer/desktop/phone-field';
import { PICKER_EMPTY_VALUE } from '../../../components/consumer/desktop/picker';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const options = [
  { label: { term: '123456789' }, value: '123456789' },
  { label: { term: '987654321' }, value: '987654321' },
  { label: { term: 'Add new phone number' }, value: PICKER_EMPTY_VALUE },
];

const validate = value => {
  const errors = {};
  if (!value) {
    errors.phone = 'Required';
  } else if (value.includes(' ') || value.includes('-')) {
    errors.phone = 'No spaces or dashes';
  }
  return errors;
};

storiesOf('Consumer/Desktop/Form Fields/phone-field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('stored-phone-number/default', () => (
    <FieldStateProvider
      validate={validate}
      component={PhoneField}
      name="stored-phone-field"
      options={options}
      label="Phone number"
      phoneLabel="Phone number"
      onChange={action('onChange')}
      value="123456789"
      orLabel="Or"
      addLabel="Add New"
    />
  ))
  .add('stored-phone-number/add-new', () => (
    <FieldStateProvider
      validate={validate}
      component={PhoneField}
      name="new-phone-field"
      options={options}
      label="Phone number"
      phoneLabel="Phone number"
      onChange={action('onChange')}
    />
  ));
