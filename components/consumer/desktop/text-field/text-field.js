import React from 'react';
import FormField from '../form-field';
import { labelTypes } from '../label';

import './style.scss';

class TextField extends FormField {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-text-field';

  baseType = 'text';

  get labelType() {
    if (this.error) return labelTypes.ERROR;
    return labelTypes.base;
  }

  get type() {
    return this.adaptedProps.type || this.baseType;
  }

  get value() {
    return this.adaptedProps.value || '';
  }

  _renderLabel() {
    if (this.props.simple) {
      return null;
    }

    return this.label;
  }

  _renderInput() {
    return (
      <input
        onBlur={this.onBlur}
        onChange={this.onChange}
        onFocus={this.onFocus}
        name={this.adaptedProps.name}
        value={this.value}
        placeholder={this.placeholder}
        pattern={this.adaptedProps.pattern}
        type={this.type}
        disabled={this.adaptedProps.disabled}
      />
    );
  }

  _renderIcon() {
    if (!this.props.icon) return null;

    return (
      <div className="pbg-text-field-icon">
        <img src={this.props.icon} />
      </div>
    );
  }

  _renderHint() {
    if (this.props.simple) {
      return null;
    }

    return this.hintOrError;
  }

  render() {
    return (
      <div className={this.className}>
        {this._renderLabel()}
        {this._renderInput()}
        {this._renderIcon()}
        {this._renderHint()}
      </div>
    );
  }
}

export default TextField;
