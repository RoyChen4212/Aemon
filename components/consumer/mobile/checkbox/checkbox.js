import React from 'react';
import FormField from '../form-field';
import Label from '../label';
import makeEvent from '../../../lib/make-event';
import './style.css';

class Checkbox extends FormField {
  baseClassName = 'pbg-form-field pbg-checkbox';

  get checked() { return this.adaptedProps.value || false; }

  get label() {
    const { label } = this.adaptedProps;
    const labelElement = (
      <Label type={this.labelType} required={this.adaptedProps.required}>{label}</Label>
    );
    return label ? labelElement : null;
  }

  onChange = ev => this.adaptedProps.onChange(makeEvent(ev.target.checked));

  render() {
    return (
      <div className={this.className}>
        <input
          type="checkbox"
          checked={this.checked}
          onChange={this.onChange}
          name={this.adaptedProps.name}
        />
        {this.label}
      </div>
    );
  }
}

export { Checkbox };
