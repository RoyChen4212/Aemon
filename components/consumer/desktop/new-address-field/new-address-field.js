import React from 'react';
import { get } from 'lodash';

import Picker from '../picker';
import Label, { labelTypes } from '../label';
import Hint from '../hint';
import FormField from '../form-field';
import TextField from '../text-field';
import makeEvent from '../../../lib/make-event';
import { fieldNames } from '../../mobile/new-address-field/new-address-field';

import './style.scss';

/** @extends React.Component */
class AddressField extends FormField {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-new-address-field';

  state = {
    [`${fieldNames.STREET_ADDRESS}Touched`]: false,
    [`${fieldNames.CITY}Touched`]: false,
    [`${fieldNames.STATE}Touched`]: false,
    [`${fieldNames.POSTAL_CODE}Touched`]: false,
    [`${fieldNames.COUNTRY}Touched`]: false,
  };

  get className() {
    return this.baseClassName;
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

  renderTextFieldFor(fieldName) {
    return (
      <TextField
        name={fieldName}
        value={this.currentValue[fieldName] || ''}
        label={this.extractLabel(fieldName)}
        error={this.extractError(fieldName)}
        onChange={ev => this.updateValue({ [fieldName]: ev.target.value })}
        onBlur={() => this.onBlur(makeEvent(this.currentValue), fieldName)}
      />
    );
  }

  // renderLabel() {
  //   if (!this.props.label) return null;
  //   return (
  //     <div className="pbg-new-address-field-label-and-hint">
  //       <Label type={labelTypes.STRONG} required={this.props.required}>
  //         {this.props.label}
  //       </Label>
  //       {this.props.hint ? (
  //         <React.Fragment>
  //           <br />
  //           <Hint>{this.props.hint}</Hint>
  //         </React.Fragment>
  //       ) : null}
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className={this.className}>
        {this.renderLabel()}
        {this.renderTextFieldFor(fieldNames.STREET_ADDRESS)}
        {this.renderTextFieldFor(fieldNames.CITY)}
        {this.renderTextFieldFor(fieldNames.STATE)}
        {this.renderTextFieldFor(fieldNames.POSTAL_CODE)}
        <Picker
          name={fieldNames.COUNTRY}
          options={this.countryOptions}
          value={this.currentValue[fieldNames.COUNTRY]}
          label={this.extractLabel(fieldNames.COUNTRY)}
          error={this.extractError(fieldNames.COUNTRY)}
          onChange={ev => this.updateValue({ [fieldNames.COUNTRY]: ev.target.value })}
          onBlur={() => this.onBlur(makeEvent(this.currentValue), fieldNames.COUNTRY)}
        />
      </div>
    );
  }
}

export default AddressField;
