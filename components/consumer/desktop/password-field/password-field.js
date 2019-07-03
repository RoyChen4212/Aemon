import React from 'react';

import TextField from '../text-field';
import Hint, { hintTypes } from '../hint';
import Label from '../label';

import './style.scss';

class PasswordField extends TextField {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-text-field pbg-password-field';

  baseType = 'password';

  renderForgotPassword = () => {
    if (!this.props.forgotPasswordText) return null;
    return (
      <Hint type={hintTypes.CLICKABLE} onClick={this.adaptedProps.onForgotPassword}>
        {this.props.forgotPasswordText}
      </Hint>
    );
  };

  renderLabel() {
    if (this.props.simple) return null;

    const { label, forgotPasswordText } = this.props;
    const header = (
      <div className="pbg-password-field-header">
        <Label type={this.labelType} required={this.props.required}>
          {label}
        </Label>
        {this.renderForgotPassword()}
      </div>
    );
    return label || forgotPasswordText ? header : null;
  };
}

export default PasswordField;
