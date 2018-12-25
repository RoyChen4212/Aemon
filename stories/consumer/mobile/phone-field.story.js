import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PhoneField } from '../../../components/consumer/mobile/form-fields';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';


const phoneOptions = [
  {label: '+52 (33) 3684-7288', value: 'first'},
  {label: '+1 (94) 5555-2222', value: 'second'},
  {label: 'Add new phone', value: 'new'},
];

const validate = (value) => {
  const errors = {};
  if (!value.phone) {
    errors.phone = 'Must type in your phone';
  }

  return errors;
};

storiesOf('Form Fields/Phone Field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('No validations', () => (
    <FieldStateProvider
      component={PhoneField}
      name="new-phone-field"
      phoneOptions={phoneOptions}
      addPhoneLabel="Phone Number"
      addNewButtonLabel="Add new"
      onChange={action('onChange')}
    />
  ))
  .add('With required street and city', () => (
    <FieldStateProvider
      validate={validate}
      component={PhoneField}
      name="new-phone-field"
      phoneOptions={phoneOptions}
      addPhoneLabel="Phone Number"
      addNewButtonLabel="Add new"
      onChange={action('onChange')}
    />
  ));
