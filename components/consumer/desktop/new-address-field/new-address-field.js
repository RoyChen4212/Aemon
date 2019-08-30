import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';

import Picker from '../picker';
import FormField from '../form-field';
import TextField from '../text-field';
import makeEvent from '../../../lib/make-event';
import { addressFields } from '../../mobile/new-address-field';

import './style.scss';

/** @extends React.Component */
class AddressField extends FormField {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-new-address-field';

  state = {
    [`${addressFields.STREET_ADDRESS}Touched`]: false,
    [`${addressFields.CITY}Touched`]: false,
    [`${addressFields.STATE}Touched`]: false,
    [`${addressFields.POSTAL_CODE}Touched`]: false,
    [`${addressFields.COUNTRY}Touched`]: false,
  };

  static propTypes = {
    label: PropTypes.string,
    hint: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    label: null,
    hint: null,
    className: null,
  };

  get className() {
    const { className } = this.props;
    return classnames(this.baseClassName, className);
  }

  get countryOptions() {
    return this.adaptedProps.countryOptions || [];
  }

  get currentValue() {
    return this.adaptedProps.value || {};
  }

  extractLabel(fieldName) {
    return get(this.adaptedProps, `labels.${fieldName}`, '');
  }

  extractError(fieldName) {
    const forceDisplay = get(this.adaptedProps, 'forceErrorDisplay', false);
    const errorMessage = get(this.adaptedProps, `error.${fieldName}`);
    if (errorMessage && forceDisplay) return errorMessage;

    const { [`${fieldName}Touched`]: touched } = this.state;
    if (!errorMessage || !touched) return null;
    return errorMessage;
  }

  updateValue = value => {
    const newValue = { ...this.currentValue, ...value };
    this.onChange(makeEvent(newValue));
  };

  onBlur = (ev, fieldName) => {
    this.setState({ [`${fieldName}Touched`]: true }, () => {
      if (this.adaptedProps.onBlur) this.adaptedProps.onBlur(ev);
    });
  };

  renderTextFieldFor(fieldName, isFullWidth) {
    return (
      <TextField
        className={classnames('pbg-new-address-text-field', { 'pbg-new-address-field-full': isFullWidth })}
        name={fieldName}
        value={this.currentValue[fieldName] || ''}
        label={this.extractLabel(fieldName)}
        error={this.extractError(fieldName)}
        onChange={ev => this.updateValue({ [fieldName]: ev.target.value })}
        onBlur={() => this.onBlur(makeEvent(this.currentValue), fieldName)}
      />
    );
  }

  renderLabel() {
    const { label, hint } = this.props;
    if (!label) return null;

    return (
      <div>
        <div className="pbg-desktop-label-normal">{label}</div>
        {hint && <div className="pbg-desktop-small-text pbg-desktop-secondary-text">{hint}</div>}
      </div>
    );
  }

  render() {
    return (
      <div className={this.className}>
        {this.renderLabel()}
        <div className="pbg-new-address-field-container">
          {this.renderTextFieldFor(addressFields.STREET_ADDRESS, true)}
          {this.renderTextFieldFor(addressFields.CITY)}
          {this.renderTextFieldFor(addressFields.STATE)}
          {this.renderTextFieldFor(addressFields.POSTAL_CODE)}
          <Picker
            name={addressFields.COUNTRY}
            options={this.countryOptions}
            value={this.currentValue[addressFields.COUNTRY]}
            label={this.extractLabel(addressFields.COUNTRY)}
            error={this.extractError(addressFields.COUNTRY)}
            onChange={ev => this.updateValue({ [addressFields.COUNTRY]: ev.target.value })}
            onBlur={() => this.onBlur(makeEvent(this.currentValue), addressFields.COUNTRY)}
            button
          />
        </div>
      </div>
    );
  }
}

export default AddressField;
