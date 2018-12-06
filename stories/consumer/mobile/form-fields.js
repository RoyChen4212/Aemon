import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  TextField, PasswordField
} from '../../../components/consumer/mobile/form-fields';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Form Fields', module)
  .add('Text Field', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 story-wrapper">
          <TextField
            name="field1"
            label="A text field"
          />
        </div>
        <div className="col-12 story-wrapper">
          <TextField
            name="field2"
            label="A text field"
            hint="with a hint"
          />
        </div>
        <div className="col-12 story-wrapper">
          <TextField
            name="field3"
            label="A text field"
            error="this field has error"
          />
        </div>
      </div>
    </div>
  ))
  .add('Password Field', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 story-wrapper">
          <PasswordField
            name="pwd1"
            label="Your password"
            forgotPasswordText="Forgot?"
            onForgotPassword={action('click')}
          />
        </div>
        <div className="col-12 story-wrapper">
          <PasswordField
            name="pwd2"
            label="Your password"
            hint="is secret"
            forgotPasswordText="Forgot?"
            onForgotPassword={action('click')}
          />
        </div>
        <div className="col-12 story-wrapper">
          <PasswordField
            name="pwd3"
            label="Your password"
            error="this field has error"
            forgotPasswordText="Forgot?"
            onForgotPassword={action('click')}
          />
        </div>
      </div>
    </div>
  ));