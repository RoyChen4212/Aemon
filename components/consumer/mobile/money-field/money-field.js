import React from 'react';
import PropTypes from 'prop-types';
import { USD } from '@paybygroup/baelish';

import TextField from '../text-field';
import { formatCurrency } from '../../desktop/money-field/money-field';

import './style.scss';

/** @extends React.Component */
class MoneyField extends TextField {
  static propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currency: PropTypes.string,
  };

  static defaultProps = {
    value: null,
    defaultValue: null,
    currency: USD,
    name: 'money-field',
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
    const { currency } = this.props;

    this.setState({ value: formatCurrency(event.target.value, currency) });
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
        placeholder={formatCurrency(0, currency)}
      />
    );
  }
}

export default MoneyField;
