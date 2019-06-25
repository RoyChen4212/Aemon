import React from 'react';
import FormField from '../form-field';
import { labelTypes } from '../label';
import './style.scss';

class TextField extends FormField {
  baseClassName = 'pbg-consumer-mobile pbg-form-field pbg-text-field';

  baseType = 'text';

  get labelType() {
    if (this.adaptedProps.error) return labelTypes.ERROR;
    return labelTypes.ACTIVE;
  }

  get type() {
    return this.adaptedProps.type || this.baseType;
  }

  get value() {
    return this.adaptedProps.value || '';
  }

  get input() {
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
      />
    );
  }

  render() {
    return (
      <div className={this.className}>
        {this.label}
        {this.input}
        {this.hintOrError}
      </div>
    );
  }
}

export { TextField };
