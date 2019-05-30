import React from 'react';
import makeEvent from '../../lib/make-event';

const ComposeFormField = (FormField) => (
  class ComplexValueFormField extends FormField {
    get currentValue() { return this.adaptedProps.value || {}; }

    updateValue = (value) => {
      const newValue = { ...this.currentValue, ...value };
      this.onChange(makeEvent(newValue));
    }
  }
);

export default ComposeFormField;