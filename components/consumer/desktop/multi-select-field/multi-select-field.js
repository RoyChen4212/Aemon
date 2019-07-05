import React from 'react';
import get from 'lodash/get';
import includes from 'lodash/includes';

import Checkbox from '../checkbox';
import FormField from '../form-field';
import makeEvent from '../../../lib/make-event';

import './style.scss';

/**
 * MULTI SELECT FIELD COMPONENT
 */
class MultiSelectField extends FormField {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-multi-select-field';

  /**
   * GET CHECKBOX LIST VALUE FROM PROPS
   */
  get value() {
    return get(this, 'adaptedProps.value', []);
  }

  /**
   * GET LABEL FROM PROPS
   */
  get label() {
    return this.adaptedProps.label;
  }

  /**
   * GET VALUE FOR OPTION
   */
  valueForOption(opt) {
    return includes(this.value, opt.value);
  }

  /**
   * CHECKBOX LIST UPDATE VALUE
   */
  updateValue = (checked, value) => {
    if (checked) return this.onChange(makeEvent([...this.value, value]));
    return this.onChange(makeEvent(this.value.filter(v => v !== value)));
  };

  /**
   * RENDER CHECKBOX LIST
   */
  renderCheckboxList() {
    return get(this.adaptedProps, 'options', []).map((opt, index) => {
      return (
        <Checkbox
          key={`checkbox_${opt.value}`}
          label={opt.label}
          value={this.valueForOption(opt)}
          name={`checkbox_${index}`}
          onChange={({ target }) => this.updateValue(target.value, opt.value)}
        />
      );
    });
  }

  /**
   * RENDER
   */
  render() {
    return (
      <div className={this.className}>
        {/* LABEL */}
        <div className="pbg-multi-select-field-label-wrapper">{this.renderLabel()}</div>

        {/* HINT */}
        <div className="pbg-multi-select-field-hint-wrapper">{this.renderHintOrError()}</div>

        {/* CHECKBOX LIST */}
        {this.renderCheckboxList()}
      </div>
    );
  }
}

export default MultiSelectField;
