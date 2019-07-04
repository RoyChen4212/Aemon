import React from 'react';
import makeEvent from '../../lib/make-event';

const ComposeCheckbox = (FormField, Label, _baseClassName) =>
  class BaseCheckbox extends FormField {
    baseClassName = _baseClassName || 'pbg-form-field pbg-checkbox';

    get checked() {
      return this.adaptedProps.value || false;
    }

    renderLabel() {
      const { label } = this.adaptedProps;
      const labelElement = (
        <Label type={this.labelType} required={this.adaptedProps.required}>
          {label}
        </Label>
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
            disabled={this.adaptedProps.disabled}
          />
          {this.renderLabel()}
        </div>
      );
    }
  };

export default ComposeCheckbox;
