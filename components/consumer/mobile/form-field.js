import React from 'react';
import Label, { types as labelTypes } from './label';
import Hint, { types as hintTypes } from './hint';

class FormField extends React.Component {
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

  get label() {
    const { label } = this.props;
    return label ? <div><Label type={this.labelType}>{label}</Label></div> : null;
  }

  get hintOrError() {
    if (this.error) return <div><Hint type={hintTypes.ERROR}>{this.error}</Hint></div>;
    if (this.hint) return <div><Hint>{this.hint}</Hint></div>;
    return null;
  }

  onFocus = () => {
    this.setState({ focused: true });
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
