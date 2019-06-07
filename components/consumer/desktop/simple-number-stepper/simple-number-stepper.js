import React from 'react';
import makeEvent from '../../../lib/make-event';
import FormField from '../form-field';

import './style.css';

class SimpleNumberStepper extends FormField {
  baseClassName =
    'pbg-consumer-desktop pbg-form-field pbg-simple-number-stepper';

  onIncrementClicked = () => {
    if (this.canIncrement()) {
      this.onChange(makeEvent(this.value + 1));
    }
  };

  onDecrementClicked = () => {
    if (this.canDecrement()) {
      this.onChange(makeEvent(this.value - 1));
    }
  };

  canIncrement() {
    const { max } = this.props;
    return max || max === 0 ? this.value < max : true;
  }

  canDecrement() {
    const { min } = this.props;
    return min || min === 0 ? this.value > min : true;
  }

  renderDecrement() {
    if (this.canDecrement()) {
      return (
        <button
          type="button"
          className="decrement"
          onClick={this.onDecrementClicked}
        />
      );
    }
    return <button disabled type="button" className="decrement disabled" />;
  }

  renderIncrement() {
    if (this.canIncrement()) {
      return (
        <button
          type="button"
          className="increment"
          onClick={this.onIncrementClicked}
        />
      );
    }
    return <button disabled type="button" className="increment disabled" />;
  }

  render() {
    return (
      <div className={this.className}>
        <div className="pbg-clearfix">
          {this.renderDecrement()}
          <input type="number" value={this.value} size="2" disabled />
          {this.renderIncrement()}
        </div>
      </div>
    );
  }
}

export default SimpleNumberStepper;
