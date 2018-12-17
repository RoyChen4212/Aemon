import React from 'react';
import FormField from '../form-field';
import Label from '../label';
import makeEvent from '../../../lib/make-event';
import './style.scss';

class Checkbox extends FormField {
  baseClassName = 'pbg-form-field pbg-checkbox';

  get checked() { return this.props.value || false; }

  get label() {
    const { label } = this.props;
    const labelElement = (
      <Label type={this.labelType} required={this.props.required}>{label}</Label>
    );
    return label ? labelElement : null;
  }

  onChange = (ev) => {
    if (this.props.onChange) this.props.onChange(makeEvent(ev.target.checked));
  }

  render() {
    return (
      <div className={this.className}>
        <input type="checkbox" checked={this.checked} onChange={this.onChange}/>
        {this.label}
      </div>
    );
  }
}

export { Checkbox };
