import React from 'react';

import get from 'lodash/get';
import FormField from '../form-field';
import ComplexValueFormField from '../../shared/complex-value-form-field';
import PasswordField from '../password-field';
import { Checkbox } from '../checkbox';
import makeEvent from '../../../lib/make-event';

import './style.scss';

const ComposedFormField = ComplexValueFormField(FormField);

class GuestPasswordField extends ComposedFormField {
  baseClassName = 'pbg-consumer-desktop pbg-guest-password-field';

  state = {
    guest: false,
  };

  static getDerivedStateFromProps(props, state) {
    const guest = get(props, 'value.guest', false);
    if (guest !== state.guest) return { guest };
    return null;
  }

  onCheckboxChange = ev => {
    this.setState({ guest: ev.target.value });
    this.updateValue({ guest: ev.target.value });
  };

  onInputChange = ev => {
    this.updateValue({ password: ev.target.value });
  };

  renderHintWithCheckbox = () => {
    if (this.error) return null;
    if (!this.hint) return null;

    return (
      <div>
        <Checkbox label={this.hint} value={this.currentValue.guest} onChange={this.onCheckboxChange} />
      </div>
    );
  };

  render = () => {
    return (
      <div className={this.className}>
        <PasswordField
          {...this.props}
          type={this.baseType}
          value={this.currentValue.password}
          hint={null}
          disabled={this.state.guest}
          onChange={this.onInputChange}
          onBlur={() => this.onBlur(makeEvent(this.currentValue))}
        />
        {this.renderHintWithCheckbox()}
      </div>
    );
  };
}

export default GuestPasswordField;
