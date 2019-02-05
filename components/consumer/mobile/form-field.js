import React from 'react';

import BaseFormField from '../shared/base-form-field';
import Label, { labelTypes } from './label';
import Hint from './hint';

class FormField extends BaseFormField {
  baseClassName = 'pbg-form-field';

  get adaptedProps() {
    if (this.props.adapter) return this.props.adapter(this.props);
    return this.props;
  }

  get error() { return this.adaptedProps.error; }

  get hint() { return this.adaptedProps.hint; }

  get focused() { return this.adaptedProps.focused || !!this.error; }

  get value() { return this.adaptedProps.value; }

  get labelType() {
    if (this.props.error) return labelTypes.ERROR;
    return labelTypes.base;
  }

  get label() {
    const { label } = this.props;
    const labelElement = (
      <div><Label type={this.labelType} required={this.props.required}>{label}</Label></div>
    );
    return label ? labelElement : null;
  }

  get hintOrError() {
    return this.renderHintOrError(Hint);
  }
};

export default FormField;
