import BaseFormField from '../shared/base-form-field';
import Label, { labelTypes } from './label';
import Hint from './hint';

class FormField extends BaseFormField {
  baseClassName = 'pbg-form-field';

  get labelType() {
    if (this.props.error) return labelTypes.ERROR;
    return labelTypes.base;
  }

  get placeholder() {
    const { disabled, placeholder, label } = this.adaptedProps;
    const text = placeholder || placeholder === '' ? placeholder : label;
    return disabled ? null : text;
  }

  renderLabel() {
    return super.renderLabel(Label);
  }

  renderHintOrError() {
    return super.renderHintOrError(Hint);
  }
}

export default FormField;
