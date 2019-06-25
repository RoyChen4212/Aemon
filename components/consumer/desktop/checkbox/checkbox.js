import React from 'react';
import FormField from '../form-field';
import Label, { labelTypes } from '../label';
import Hint from '../hint';
import BaseCheckbox from '../../shared/base-checkbox';

import './style.scss';

const baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-checkbox';
const ComposedCheckbox = BaseCheckbox(FormField, Label, baseClassName);

class Checkbox extends ComposedCheckbox {
  get labelType() {
    if (this.props.error) return labelTypes.ERROR;
    return labelTypes.base;
  }

  get label() {
    const { label, hint } = this.adaptedProps;
    return (
      <div className="pbg-checkbox-label-hint-placeholder">
        {label && (
          <Label type={this.labelType} required={this.adaptedProps.required}>
            {label}
          </Label>
        )}
        {hint && <Hint>{hint}</Hint>}
      </div>
    );
  }
}

export { Checkbox };
