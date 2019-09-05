import React from 'react';
import PropTypes from 'prop-types';
import { USD } from '@paybygroup/baelish';

import TextField from '../text-field';
import { formatCurrency } from '../../desktop/money-field/money-field';
import makeEvent from '../../../lib/make-event';

import './style.scss';

/** @extends React.Component */
class MoneyField extends TextField {
  baseClassName = 'pbg-consumer-mobile pbg-form-field pbg-text-field pbg-money-field';

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
    const { onChange } = this.adaptedProps;
    const { currency } = this.props;
    const value = formatCurrency(event.target.value, currency);

    this.setState({ value });
    onChange(makeEvent(value));
  };

  renderInput() {
    const { name, currency } = this.props;
    return (
      <input
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
