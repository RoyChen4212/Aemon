import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import FormField from '../form-field';
import ComplexValueFormField from '../../shared/complex-value-form-field';
import PasswordField from '../password-field';
import Checkbox from '../checkbox';
import makeEvent from '../../../lib/make-event';

import './style.scss';

const ComposedFormField = ComplexValueFormField(FormField);

/** @extends React.Component */
class GuestPasswordField extends ComposedFormField {
  baseClassName = 'pbg-consumer-desktop pbg-guest-password-field';

  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: null,
  }

  onCheckboxChange = ev => {
    this.updateValue({ guest: ev.target.value });
  };

  onInputChange = ev => {
    this.updateValue({ password: ev.target.value });
  };

  renderHintWithCheckbox() {
    if (this.error || !this.hint) return null;

    return (
      <div>
        <Checkbox
          label={this.hint}
          value={this.currentValue.guest}
          disabled={this.adaptedProps.disabled}
          onChange={this.onCheckboxChange}
        />
      </div>
    );
  }

  render() {
    const { className } = this.props;
    return (
      <div className={cx(this.className, className)}>
        <PasswordField
          label={this.adaptedProps.label}
          type={this.baseType}
          value={this.currentValue.password}
          hint={null}
          disabled={this.currentValue.guest || this.adaptedProps.disabled}
          onChange={this.onInputChange}
          onBlur={() => this.onBlur(makeEvent(this.currentValue))}
          error={this.adaptedProps.error}
        />
        {this.renderHintWithCheckbox()}
      </div>
    );
  }
}

export default GuestPasswordField;
