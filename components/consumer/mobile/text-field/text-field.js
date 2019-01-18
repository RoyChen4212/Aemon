import React from 'react';
import FormField from '../form-field';
import { labelTypes } from '../label';
import './style.css';

class TextField extends FormField {

  baseClassName = 'pbg-form-field pbg-text-field';
  baseType = 'text';

  get labelType() {
    if (this.adaptedProps.error) return labelTypes.ERROR;
    return labelTypes.ACTIVE;
  }

  get type() { return this.adaptedProps.type || this.baseType };

  get placeholder() {
    const { required, label } = this.adaptedProps;
    return !required ? label : label + '*';
  }

  get input() {
    return (
      <input
        onBlur={this.onBlur}
        onChange={this.onChange}
        onFocus={this.onFocus}
        name={this.adaptedProps.name}
        value={this.adaptedProps.value}
        placeholder={this.placeholder}
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
