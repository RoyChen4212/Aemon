import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';
import PasswordField from '../../../components/consumer/desktop/password-field';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Form Fields/password-field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('password-field/default', () => (
    <FieldStateProvider
      component={PasswordField}
      name="password"
      label="Password"
      hint="Please login with your password."
      forgotPasswordText="Forgot?"
      onChange={action('change')}
      onForgotPassword={action('click')}
      required
    />
  ))
  .add('password-field/error', () => (
    <FieldStateProvider
      component={PasswordField}
      name="password"
      label="Password"
      hint="Please login with your password."
      forgotPasswordText="Forgot?"
      error="Incorrect password."
      onChange={action('change')}
      onForgotPassword={action('click')}
      required
    />
  ));
