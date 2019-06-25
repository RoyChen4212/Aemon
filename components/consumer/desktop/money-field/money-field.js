import React from 'react';
import PropTypes from 'prop-types';
import money, { USD, format } from '@paybygroup/baelish';

import { TextField } from '../text-field';

const formatCurrency = (value, currency) => format(money(value, currency));

class MoneyField extends TextField {
  static propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currency: PropTypes.string,
  };

  static defaultProps = {
    currency: USD,
  };

  state = {
    value: formatCurrency(this.props.defaultValue, this.props.currency),
  };

  handleChange = event => {
    this.setState({ value: formatCurrency(event.target.value, this.props.currency) });
  };

  get value() {
    return this.props.value || this.state.value;
  }

  get name() {
    return this.props.name || 'money-field';
  }

  get input() {
    return (
      <input
        className="pbg-money-field"
        pattern="\d*"
        name={this.name}
        value={this.value}
        onChange={this.handleChange}
        placeholder={formatCurrency(0, this.props.currency)}
      />
    );
  }
}

export { MoneyField };
