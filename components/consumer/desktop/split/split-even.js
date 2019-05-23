import React from 'react';
import find from 'lodash/find';
import get from 'lodash/get';
import first from 'lodash/first';
import last from 'lodash/last';
import FormField from '../form-field';
import ComplexValueFormField from '../../shared/complex-value-form-field';
import Picker from '../picker';
import NumberStepper from '../simple-number-stepper';
import Label, { labelTypes } from '../label';

import './style.css';

const ComposedFormField = ComplexValueFormField(FormField);

class SplitEven extends ComposedFormField {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-split pbg-split-even';

  get isLocked() { return this.adaptedProps.locked; }
  get isMin () { return this.adaptedProps.min || !this.adaptedProps.range; }
  get copy() { return this.adaptedProps.copy || {}; }
  get minBoundary() {
    const boundaries = get(this.props, 'boundaries', []);
    return first(boundaries);
  }
  get maxBoundary() {
    const boundaries = get(this.props, 'boundaries', []);
    return last(boundaries);
  }
  get minStepperMaxBoundary() {
    if (this.currentValue.maxShares === this.maxBoundary) {
      return this.maxBoundary - 1;
    }
    return null;
  };
  get maxStepperMinBoundary() {
    if (this.currentValue.minShares === this.minBoundary) {
      return this.minBoundary + 1;
    }
    return null;
  }

  get selectedSplitOptionText() { 
    const selectedOption = find(this.adaptedProps.options || {}, (opt) => {
      return opt.value === get(this.value, 'splitType');
    });
    return get(selectedOption, 'label.term');
  }

  renderSplitTypePicker() {
    if (this.isFixed) return null;

    return (
      <React.Fragment>
        <div className="pbg-split-copy">
          {this.copy.split}
          {this.isLocked && <strong>&nbsp;{this.selectedSplitOptionText},&nbsp;</strong>}
        </div>
        { 
          !this.isLocked &&
          <Picker
            options={this.adaptedProps.options}
            value={get(this.value, 'splitType')}
            onChange={(ev) => this.updateValue({splitType: ev.target.value })}
            big
            simple
          />
        }
      </React.Fragment>
    )
  }

  renderRange() {
    if (this.isMin) return this.renderSingleRange();
    return this.renderMultiRange();
  }

  renderSingleRange() {
    return (
      <React.Fragment>
        <div className="pbg-split-copy">{this.copy.across || ''}</div>
        <NumberStepper
          onChange={(ev) => this.updateValue({ minShares: ev.target.value }) }
          min={this.minBoundary}
          max={this.maxBoundary}
          value={this.currentValue.minShares}
        />
        <div className="pbg-split-copy">{this.copy.shares || ''}</div>
      </React.Fragment>
    );
  }

  renderMultiRange() {
    return (
      <React.Fragment>
        <div className="pbg-split-copy">{this.copy.across || ''}</div>
        <NumberStepper
          onChange={(ev) => this.sanitizeMinRangeValue(ev.target.value) }
          min={this.minBoundary}
          max={this.minStepperMaxBoundary}
          value={this.currentValue.minShares}
        />
        <div className="pbg-split-copy">{this.copy.to || ''}</div>
        <NumberStepper
          onChange={(ev) => this.sanitizeMaxRangeValue(ev.target.value) }
          min={this.maxStepperMinBoundary}
          max={this.maxBoundary}
          value={this.currentValue.maxShares}
        />
        <div className="pbg-split-copy">{this.copy.shares || ''}</div>
      </React.Fragment>
    );
  }

  sanitizeMinRangeValue(value) {
    if (value >= this.currentValue.maxShares) {
      return this.updateValue({ minShares: value, maxShares: value + 1 });
    }

    return this.updateValue({ minShares: value });
  }

  sanitizeMaxRangeValue(value) {
    if (value <= this.currentValue.minShares) {
      return this.updateValue({ minShares: value - 1, maxShares: value});
    }
    return this.updateValue({ maxShares: value });
  }

  render() {
    return (
      <div className={this.className}>
        <div className="pbg-clearfix">
          { this.renderSplitTypePicker() }
          { this.renderRange() }
        </div>
      </div>
    )
  }
};

export { SplitEven };