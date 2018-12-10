import React from 'react';
import Label, { types as labelTypes } from './label';
import Hint, { types as hintTypes } from './hint';

class FormField extends React.PureComponent {
  state = {
    focused: false,
  }

  baseClassName = 'pbg-form-field';

  get className() {
    let resultingClassName = this.baseClassName;

    if (this.error) {
      resultingClassName += ' pbg-form-field-error';
    }

    if (this.focused) {
      resultingClassName += ' pbg-form-field-focused';
    }

    return resultingClassName;
  }

  get error() { return this.props.error; }

  get hint() { return this.props.hint; }

  get focused() { return this.state.focused || !!this.error; }

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
    if (this.error) return <div><Hint type={hintTypes.ERROR}>{this.error}</Hint></div>;
    if (this.hint) return <div><Hint>{this.hint}</Hint></div>;
    return null;
  }

  onFocus = () => {
    this.setState({ focused: true });
  }

  onChange = (ev) => {
    if (this.props.onChange) this.props.onChange(ev);
  }

  onBlur = (ev) => {
    this.setState({ focused: false });
    if (this.props.onBlur) this.props.onBlur(ev);
  }

  render() {
    return (
      <div className={this.className}>
      </div>
    )
  }
};

export default FormField;
