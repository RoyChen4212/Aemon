import React from 'react';
import FormField from '../form-field';
import { labelTypes } from '../label';
import './style.css';

class TextArea extends FormField {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-text-area';
  baseType = 'text';

  get rows() {
    return 3;
  }

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
        value={this.value}
        placeholder={this.placeholder}
      />
    );
  }

  render() {
    return (
      <div className={this.className}>
        {this.input}
        {this.hintOrError}
      </div>
    );
  }
}

export default TextArea;
