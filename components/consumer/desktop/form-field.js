import BaseFormField from '../shared/base-form-field';
import Label, { labelTypes } from './label';
import Hint from './hint';

class FormField extends BaseFormField {
  get labelType() {
    return labelTypes.base;
  }

  get label() {
    return this.renderLabel(Label);
  }

  get hintOrError() {
    return this.renderHintOrError(Hint);
  }

  get placeholder() {
    const { disabled, label } = this.adaptedProps;
    const placeholder = this.adaptedProps.placeholder || label;
    return !disabled ? placeholder : null;
  }
}

export default FormField;
