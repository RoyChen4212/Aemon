import React from 'react';
import FormField from '../form-field';
import Label from '../label';

class Checkbox extends FormField {
  baseClassName = 'pbg-form-field pbg-checkbox';

  get label() {
    const { label } = this.props;
    const labelElement = (
      <Label type={this.labelType} required={this.props.required}>{label}</Label>
    );
    return label ? labelElement : null;
  }

  render() {
    return (
      <div className={this.className}>
        <input
          type="checkbox"
        />
        {this.label}
      </div>
    );
  }
}

export { Checkbox };
