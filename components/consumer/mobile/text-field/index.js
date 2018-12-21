import React from 'react';
import FormField from '../form-field';
import { labelTypes } from '../label';
import './style.css';

class TextField extends FormField {

  baseClassName = 'pbg-form-field pbg-text-field';
  baseType = 'text';

  get labelType() {
    if (this.props.error) return labelTypes.ERROR;
    return labelTypes.ACTIVE;
  }

  get type() { return this.props.type || this.baseType };

  get placeholder() { return !this.props.required ? this.props.label : this.props.label + '*'; }

  render() {
    const props = this.props;
    return (
      <div className={this.className}>
        {this.label}
        <input
          onBlur={this.onBlur}
          onChange={props.onChange}
          onFocus={this.onFocus}
          name={props.name}
          value={props.value}
          placeholder={this.placeholder}
          type={this.type}
        />
        {this.hintOrError}
      </div>
    );
  }
}

export { TextField };
