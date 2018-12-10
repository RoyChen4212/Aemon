import React from 'react';
import PropTypes from 'prop-types';
import FormField from '../form-field';
import Label, { types as labelTypes } from '../label';
import './style.scss';

class DatePicker extends FormField {
  static propTypes = {
    formater: PropTypes.func,
  };

  baseClassName = 'pbg-form-field pbg-date-picker';

  get displayValue() {
    const format = this.props.formater || defaultFormater;
    return format(this.props.value);
  }

  render() {
    return (
      <div className={this.className}>
        {this.label}
        <div className="pbg-date-picker-container">
          <div className="pbg-date-picker-mask">
            <Label type={labelTypes.SECONDARY}>{this.displayValue}</Label>
            <span className="pbg-picker-arrow" />
          </div>
          <input
            type="date"
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </div>
        {this.hintOrError}
      </div>
    )
  }
}

const defaultFormater = (date) => {
  if (!date || date.constructor.name !== 'Date') return 'mm/dd/yyyy';
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${month}/${day}/${date.getFullYear()}`;
}

export { DatePicker };
