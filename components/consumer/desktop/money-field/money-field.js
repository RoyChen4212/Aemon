import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '../text-field';
import toCurrency from './toCurrency';

import './style.scss';

class MoneyField extends TextField {
  static propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    separator: PropTypes.oneOf(['.', ',']),
    currencySign: PropTypes.string,
  };

  static defaultProps = {
    separator: '.',
    currencySign: '$',
  };

  state = {
    value: toCurrency(this.props.defaultValue, this.props.separator),
  };

  handleChange = event => {
    const valueAsCurrency = toCurrency(event.target.value, this.props.separator);
    this.setState({ value: valueAsCurrency });
  };

  get value() {
    return this.props.value || this.state.value;
  }

  get name() {
    return this.props.name || 'money-field';
  }

  get input() {
    return (
      <div className="pbg-consumer-desktop pbg-money-field">
        <i>{this.props.currencySign}</i>
        <input
          pattern="\d*"
          name={this.name}
          value={this.value}
          onChange={this.handleChange}
          placeholder={toCurrency(0, this.props.separator)}
        />
      </div>
    );
  }
}

export { MoneyField };
