import React from 'react';

import BaseFormField from '../shared/base-form-field';
import Label, { labelTypes } from './label';
import Hint from './hint';

class FormField extends BaseFormField {
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
