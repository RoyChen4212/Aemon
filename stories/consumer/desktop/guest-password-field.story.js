import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';
import GuestPasswordField from '../../../components/consumer/desktop/guest-password-field';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Form Fields/guest-password-field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('guest-password-field/default', () => (
    <FieldStateProvider
      component={GuestPasswordField}
      name="password"
      label="Create password"
      hint="Don't create an account, just contribute."
      placeholder="Must be at least 8 characters"
      onChange={action('change')}
      required
    />
  ))
  .add('guest-password-field/disabled', () => (
    <FieldStateProvider
      component={GuestPasswordField}
      name="password"
      label="Create password"
      value={{ guest: true }}
      hint="Don't create an account, just contribute."
      onChange={action('change')}
      required
    />
  ))
  .add('guest-password-field/locked', () => (
    <FieldStateProvider
      component={GuestPasswordField}
      name="password"
      label="Create password"
      value={{ guest: false }}
      hint="Don't create an account, just contribute."
      onChange={action('change')}
      locked
      required
    />
  ))
  .add('guest-password-field/error', () => (
    <FieldStateProvider
      component={GuestPasswordField}
      name="password"
      label="Create password"
      hint="Don't create an account, just contribute."
      error="Something went wrong!"
      onChange={action('change')}
      required
    />
  ));
