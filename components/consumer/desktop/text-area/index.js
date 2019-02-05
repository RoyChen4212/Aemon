import React from 'react';
import FormField from '../../shared/form-field';
import { labelTypes } from '../../shared/label';
import './style.css';

class TextArea extends FormField {

  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-text-area';
  baseType = 'text';

  get rows() {
    const { value, focused } = this.adaptedProps;
    if (value && value.length > 100) return 3;
    return focused ? 3 : 1;
  }

  get labelType() {
    if (this.adaptedProps.error) return labelTypes.ERROR;
    return labelTypes.ACTIVE;
  }

  get type() { return this.adaptedProps.type || this.baseType };

  get placeholder() {
    const { required, label } = this.adaptedProps;
    return !required ? label : label + '*';
  }

  get value() {
    return this.adaptedProps.value || '';
  }

  get input() {
    return (
      <textarea
        rows={this.rows}
        onBlur={this.onBlur}
        onChange={this.onChange}
        onFocus={this.onFocus}
        name={this.adaptedProps.name}
        value={this.adaptedProps.value}
        placeholder={this.placeholder}
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

export { TextArea };
