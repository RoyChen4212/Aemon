import React from 'react';
import PropTypes from 'prop-types';
import money, { USD, format } from '@paybygroup/baelish';

import TextField from '../text-field';
import './style.scss';

const formatCurrency = (value, currency) =>
  format(money(value, currency), { format: { pos: '%s %v', zero: '%s 0.00' } });

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
  };

  state = {
    value: formatCurrency(this.props.defaultValue, this.props.currency),
  };

  onChange = event => {
    this.setState({ value: formatCurrency(event.target.value, this.props.currency) });
  };

  get value() {
    return this.props.value || this.state.value;
  }

  renderInput() {
    const { name } = this.props;
    return (
      <input
        className="pbg-money-field"
        pattern="\d*"
        name={name}
        value={this.value}
        onChange={this.onChange}
        placeholder={formatCurrency(0, this.props.currency)}
      />
    );
  }
}

export default MoneyField;
