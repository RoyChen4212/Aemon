import React from 'react';
import get from 'lodash/get';
import first from 'lodash/first';
import isString from 'lodash/isString';
import { HistoricalPicker } from './form-fields';
import { SmallButton } from './button';
import FormField from './form-field';
import makeEvent from '../../lib/make-event';
import touchField from '../../lib/touch-field';

class AddOrSelectField extends FormField {
  componentDidMount() {
    const selected = get(this.adaptedProps, 'value.selected');
    if (selected !== 'new' && this.options.length) {
      const newValue = {
        ...this.adaptedProps.value,
        selected: isString(selected) ? selected : get(first(this.options), 'value'),
      };
      this.onChange(makeEvent(newValue));
    }
  }

  get className() {return this.baseClassName; }

  get addingNew() {
    if (!this.options || !this.options.length) return true;
    const selected = get(this.adaptedProps, 'value.selected');
    return selected === 'new';
  }

  get addNewButton() {
    if (this.addingNew) return null;
    return (
      <SmallButton onClick={() => this.updateValue({ selected: 'new' })}>
        {this.adaptedProps.addNewButtonLabel}
      </SmallButton>
    );
  }

  get addNewField() {
    if (!this.addingNew) return null;
    return this.field;
  }

  get picker() {
    if (!this.options || !this.options.length) return null;
    return (
      <HistoricalPicker
        options={this.options}
        onChange={ev => this.updateValue({selected: ev.target.value })}
        value={get(this.adaptedProps, 'value.selected')}
      />
    );
  }

  updateValue = (value) => {
    const newValue = {
      ...this.adaptedProps.value,
      ...value,
    };
    this.onChange(makeEvent(newValue));
  }

  render() {
    return (
      <div className={this.className}>
        { this.picker }
        { this.addNewField }
        { this.addNewButton }
      </div>
    )
  }
};

export default AddOrSelectField;
