import React from 'react';
import makeEvent from '../../../lib/make-event';
import FormField from '../form-field';

import './style.scss';

class SimpleNumberStepper extends FormField {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-simple-number-stepper';

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
          className="pbg-icon-minus-small-blue pbg-simple-number-stepper-icon"
          onClick={this.onDecrementClicked}
        />
      );
    }
    return <button disabled type="button" className="pbg-icon-minus-small-gray pbg-simple-number-stepper-icon" />;
  }

  renderIncrement() {
    if (this.canIncrement()) {
      return (
        <button
          type="button"
          className="pbg-icon-plus-small-blue pbg-simple-number-stepper-icon"
          onClick={this.onIncrementClicked}
        />
      );
    }
    return <button disabled type="button" className="pbg-icon-plus-small-gray pbg-simple-number-stepper-icon" />;
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
