import React from 'react';

import BaseFormField from '../shared/base-form-field';
import Label, { labelTypes } from './label';
import Hint from './hint';

class FormField extends BaseFormField {
  get label() {
    return this.renderLabel(Label);
  }

  get hintOrError() {
    return this.renderHintOrError(Hint);
  }
};

export default FormField;
