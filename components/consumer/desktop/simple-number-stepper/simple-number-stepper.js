import React, { Component } from 'react';
import makeEvent from '../../../lib/make-event';

import './index.css';

class SimpleNumberStepper extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value || 0 };
  }

  componentWillReceiveProps(nextProps) {
    this.updateValue(nextProps.value);
  }

  onIncrementClicked = (ev) => {
    ev.preventDefault();
    const { value } = this.state;
    const newValue = this.canIncrement() ? value + 1 : value;
    this.updateValue(newValue);
  }

  onDecrementClicked = (ev) => {
    ev.preventDefault();
    const { value } = this.state;
    const newValue = this.canDecrement() ? value - 1 : value;
    this.updateValue(newValue);
  }

  updateValue(value) {
    if (this.canUpdateValue(value)) {
      this.setState({ value });
      this.props.onBlur(makeEvent(value));
      this.props.onChange(makeEvent(value));
    }
  }

  canIncrement() {
    const { value } = this.state;
    const { max } = this.props;
    return value < max;
  }

  canDecrement() {
    const { value } = this.state;
    const { min } = this.props;
    return value > min;
  }

  canUpdateValue(toValue) {
    const currentValue = this.state.value;

    if (toValue > currentValue) return this.canIncrement();
    if (toValue < currentValue) return this.canDecrement();
    return false;
  }

  render() {
    const { value } = this.state;
    return (
      <div className="number-input">
        <button type="button" className="decrement" onClick={this.onDecrementClicked}>-</button>
        <input type="number" value={value} size="2" disabled />
        <button type="button" className="increment" onClick={this.onIncrementClicked}>+</button>
      </div>
    );
  }
}

SimpleNumberStepper.defaultProps = {
  onBlur: () => {},
  onChange: () => {},
};

export default SimpleNumberStepper;
