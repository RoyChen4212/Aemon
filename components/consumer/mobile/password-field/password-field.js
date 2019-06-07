import React from 'react';
import { TextField } from '../text-field';
import Hint, { hintTypes } from '../hint';
import './style.css';

class PasswordField extends TextField {
  baseClassName = 'pbg-form-field pbg-text-field pbg-password-field';

  baseType = 'password';

  get hintOrError() {
    if (this.error) return this.errorFeedback;
    if (this.hint) return this.hintFeedback;
    return (
      <div className="pbg-forgot-password-container">{this.forgotPassword}</div>
    );
  }

  get errorFeedback() {
    return (
      <div className="pbg-forgot-password-container">
        <Hint type={hintTypes.ERROR}>{this.error}</Hint>
        {this.forgotPassword}
      </div>
    );
  }

  get hintFeedback() {
    return (
      <div className="pbg-forgot-password-container">
        <Hint>{this.hint}</Hint>
        {this.forgotPassword}
      </div>
    );
  }

  get forgotPassword() {
    return (
      <Hint
        type={hintTypes.CLICKABLE}
        onClick={this.adaptedProps.onForgotPassword}
      >
        {this.adaptedProps.forgotPasswordText || '[FORGOT PASSWROD]'}
      </Hint>
    );
  }
}

export { PasswordField };
