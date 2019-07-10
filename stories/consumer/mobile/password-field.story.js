import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PasswordField from '../../../components/consumer/mobile/password-field';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Form Fields/password-field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('password-field/login', () => (
    <FieldStateProvider
      component={PasswordField}
      name="pwd2"
      label="Your password "
      hint="Please login with your password."
      forgotPasswordText="Forgot?"
      placeholder="8 characters minimum"
      onForgotPassword={action('click')}
      required
    />
  ))
  .add('password-field/create', () => (
    <FieldStateProvider
      component={PasswordField}
      name="pwd4"
      label="Create Password "
      placeholder="8 characters minimum"
      onForgotPassword={action('click')}
      required
    />
  ))
  .add('password-field/error', () => (
    <FieldStateProvider
      component={PasswordField}
      name="pwd3"
      label="Your password "
      error="this field has error"
      placeholder="8 characters minimum"
      forgotPasswordText="Forgot?"
      onForgotPassword={action('click')}
    />
  ));
