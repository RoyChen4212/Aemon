import React from 'react';
import PropTypes from 'prop-types';

import TextField from '../text-field';
import Hint, { hintTypes } from '../hint';

import './style.scss';

/** @extends React.Component */
class PasswordField extends TextField {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-text-field pbg-password-field';

  baseType = 'password';

  static propTypes = {
    forgotPasswordText: PropTypes.string,
  };

  static defaultProps = {
    forgotPasswordText: null,
  };

  renderForgotPassword() {
    const { forgotPasswordText } = this.props;

    if (!forgotPasswordText) return null;
    return (
      <Hint type={hintTypes.CLICKABLE} onClick={this.adaptedProps.onForgotPassword}>
        {forgotPasswordText}
      </Hint>
    );
  }

  renderHintOrError() {
    if (this.adaptedProps.simple) return null;
    return (
      <div className="pbg-password-field-footer">
        {super.renderHintOrError()}&nbsp;{this.renderForgotPassword()}
      </div>
    );
  }

  // renderLabel() {
  //   const { label, simple, required } = this.adaptedProps;
  //
  //   if (simple) return null;
  //
  //   const { forgotPasswordText } = this.props;
  //   const header = (
  //     <div className="pbg-password-field-header">
  //       <Label type={this.labelType} required={required}>
  //         {label}
  //       </Label>
  //       {this.renderForgotPassword()}
  //     </div>
  //   );
  //   return label || forgotPasswordText ? header : null;
  // }
}

export default PasswordField;
