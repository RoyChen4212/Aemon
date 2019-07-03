import React from 'react';
import TextField from '../text-field';
import Hint, { hintTypes } from '../hint';
import './style.scss';

class PasswordField extends TextField {
  baseClassName = 'pbg-form-field pbg-text-field pbg-password-field';

  baseType = 'password';

  renderHintOrError() {
    if (this.error) return this.renderErrorFeedback();
    if (this.hint) return this.renderHintFeedback();
    return <div className="pbg-forgot-password-container">{this.renderForgotPassword()}</div>;
  }

  renderHintFeedback() {
    return (
      <div className="pbg-forgot-password-container">
        <Hint>{this.hint}</Hint>
        {this.renderForgotPassword()}
      </div>
    );
  }

  renderErrorFeedback() {
    return (
      <div className="pbg-forgot-password-container">
        <Hint type={hintTypes.ERROR}>{this.error}</Hint>
        {this.renderForgotPassword()}
      </div>
    );
  }

  renderForgotPassword() {
    return (
      <Hint type={hintTypes.CLICKABLE} onClick={this.adaptedProps.onForgotPassword}>
        {this.adaptedProps.forgotPasswordText || '[FORGOT PASSWROD]'}
      </Hint>
    );
  }
}

export default PasswordField;
