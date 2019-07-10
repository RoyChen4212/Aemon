import React from 'react';
import TextField from '../text-field';
import './style.scss';

class PasswordField extends TextField {
  baseClassName = 'pbg-form-field pbg-text-field pbg-password-field';
  baseType = 'password';

  get placeholder() {
    return this.adaptedProps.placeholder;
  }

  renderLabel() {
    if (this.adaptedProps.error) {
      return (<div className="pbg-password-field-label pbg-mobile-paragraph-error">{this.adaptedProps.label}</div>)
    }
    return (<div className="pbg-password-field-label pbg-mobile-paragraph">{this.adaptedProps.label}</div>)
  }

  renderHintOrError() {
    if (this.error) return this.renderErrorFeedback();
    if (this.hint) return this.renderHintFeedback();
    return <div className="pbg-forgot-password-container">{this.renderForgotPassword()}</div>;
  }

  renderHintFeedback() {
    return (
      <div className="pbg-forgot-password-container">
        <span className="pbg-mobile-hint-normal">{this.hint}</span>
        {this.renderForgotPassword()}
      </div>
    );
  }

  renderErrorFeedback() {
    return (
      <div className="pbg-forgot-password-container">
        <span className="pbg-mobile-hint-error">{this.error}</span>
        {this.renderForgotPassword()}
      </div>
    );
  }

  renderForgotPassword() {
    if (!this.adaptedProps.forgotPasswordText) {
      return null;
    }
    return (
      <span className="pbg-mobile-hint-clickable" onClick={this.adaptedProps.onForgotPassword}>
        {this.adaptedProps.forgotPasswordText || '[FORGOT PASSWROD]'}
      </span>
    );
  }
}

export default PasswordField;
