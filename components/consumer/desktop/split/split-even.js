import React from 'react';
import find from 'lodash/find';
import get from 'lodash/get';
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
        <NumberStepper onChange={(ev) => this.updateValue({ min: ev.target.value }) } />
        <div className="pbg-split-copy">{this.copy.shares || ''}</div>
      </React.Fragment>
    );
  }

  renderMultiRange() {
    return (
      <React.Fragment>
        <div className="pbg-split-copy">{this.copy.across || ''}</div>
        <NumberStepper onChange={(ev) => this.updateValue({ min: ev.target.value }) } />
        <div className="pbg-split-copy">{this.copy.to || ''}</div>
        <NumberStepper onChange={(ev) => this.updateValue({ max: ev.target.value }) } />
        <div className="pbg-split-copy">{this.copy.shares || ''}</div>
      </React.Fragment>
    );
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