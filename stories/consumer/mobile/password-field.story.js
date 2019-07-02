import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PasswordField } from '../../../components/consumer/mobile/form-fields';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Form Fields/password-field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('password-field/default', () => (
    <FieldStateProvider
      component={PasswordField}
      name="pwd2"
      label="Your password"
      hint="is secret"
      forgotPasswordText="Forgot?"
      onForgotPassword={action('click')}
      required
    />
  ))
  .add('password-field/error', () => (
    <FieldStateProvider
      component={PasswordField}
      name="pwd3"
      label="Your password"
      error="this field has error"
      forgotPasswordText="Forgot?"
      onForgotPassword={action('click')}
    />
  ));
