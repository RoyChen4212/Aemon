import React from 'react';
import PropTypes from 'prop-types';
import money, { USD, format } from '@paybygroup/baelish';

import TextField from '../text-field';
import makeEvent from '../../../lib/make-event';
import './style.scss';

export const formatCurrency = (value, currency) =>
  format(money(value, currency), { format: { pos: '%s %v', zero: '%s 0.00' } });

/** @extends React.Component */
class MoneyField extends TextField {
  static propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currency: PropTypes.string,
  };

  static defaultProps = {
    currency: USD,
    name: 'money-field',
    value: null,
    defaultValue: null,
  };

  get value() {
    const { value } = this.props;
    const { value: stateValue } = this.state;
    return value || stateValue;
  }

  constructor(props) {
    super(props);

    const { defaultValue, currency } = props;
    this.state = {
      value: formatCurrency(defaultValue, currency),
    };
  }

  onChange = event => {
    const { onChange } = this.adaptedProps;
    const { currency } = this.props;
    const value = formatCurrency(event.target.value, currency);

    this.setState({ value });
    if (onChange) {
      onChange(makeEvent(value));
    }
  };

  renderInput() {
    const { name, currency } = this.props;
    return (
      <input
        className="pbg-money-field"
        pattern="\d*"
        name={name}
        value={this.value}
        onChange={this.onChange}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        placeholder={formatCurrency(0, currency)}
      />
    );
  }
}

export default MoneyField;
