import React from 'react';
import get from 'lodash/get';
import includes from 'lodash/includes';
import Checkbox from '../checkbox';
import FormField from '../form-field';
import makeEvent from '../../../lib/make-event';
import './style.scss';

class MultiSelectField extends FormField {
  baseClassName = 'pbg-consumer-mobile pbg-form-field pbg-multi-select-field';

  get value() {
    return get(this, 'adaptedProps.value', []);
  }

  valueForOption(opt) {
    return includes(this.value, opt.value);
  }

  updateValue = (checked, value) => {
    if (checked) return this.onChange(makeEvent([...this.value, value]));
    return this.onChange(makeEvent(this.value.filter(v => v !== value)));
  };

  renderCheckboxList() {
    return get(this.adaptedProps, 'options', []).map((opt, index) => {
      return (
        <Checkbox
          key={`checkbox_${index}`}
          label={opt.label}
          value={this.valueForOption(opt)}
          name={`checkbox_${index}`}
          onChange={({ target }) => this.updateValue(target.checked, opt.value)}
        />
      );
    });
  }

  render() {
    return (
      <div className={this.className}>
        {this.renderLabel()}
        {this.renderHintOrError()}
        {this.renderCheckboxList()}
      </div>
    );
  }
}

export default MultiSelectField;
