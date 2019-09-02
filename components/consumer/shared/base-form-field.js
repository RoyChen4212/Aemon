import React from 'react';
import { hintTypes } from './base-hint';

class BaseFormField extends React.Component {
  baseClassName = 'pbg-form-field';

  get className() {
    let resultingClassName = this.baseClassName;
    const { className } = this.props;

    if (this.error && !this.focused) {
      resultingClassName += ' pbg-form-field-error';
    }

    if (this.focused) {
      resultingClassName += ' pbg-form-field-focused';
    }

    if (this.disabled) {
      resultingClassName += ' pbg-form-field-disabled';
    }

    if (className) {
      resultingClassName += ` ${className}`;
    }

    return resultingClassName;
  }

  get adaptedProps() {
    const { adapter } = this.props;
    if (adapter) return adapter(this.props);
    return this.props;
  }

  get error() {
    return this.adaptedProps.error;
  }

  get hint() {
    return this.adaptedProps.hint;
  }

  get focused() {
    return this.adaptedProps.focused;
  }

  get disabled() {
    return this.adaptedProps.disabled;
  }

  get value() {
    return this.adaptedProps.value;
  }

  get placeholder() {
    const { placeholder } = this.adaptedProps;
    return placeholder || null;
  }

  onFocus = ev => {
    return this.adaptedProps.onFocus ? this.adaptedProps.onFocus(ev) : null;
  };

  onChange = value => {
    return this.adaptedProps.onChange ? this.adaptedProps.onChange(value) : null;
  };

  onBlur = value => {
    return this.adaptedProps.onBlur ? this.adaptedProps.onBlur(value) : null;
  };

  renderHintOrError(Hint) {
    if (this.error) {
      return (
        <div>
          <Hint type={hintTypes.ERROR}>{this.error}</Hint>
        </div>
      );
    }
    if (this.hint)
      return (
        <div>
          <Hint>{this.hint}</Hint>
        </div>
      );
    return null;
  }

  renderLabel(Label) {
    const { label, required } = this.props;
    const labelElement = (
      <div>
        <Label type={this.labelType} required={required}>
          {label}
        </Label>
      </div>
    );
    return label ? labelElement : null;
  }

  render() {
    return <div className={this.className} />;
  }
}

export default BaseFormField;
