import React from 'react';
import Label, { types as labelTypes } from '../../label';
import Hint, { types as hintTypes } from '../../hint';
import './style.scss';

class TextField extends React.Component {
  state = {
    focused: false,
  }

  baseClassName = 'pbg-form-field pbg-text-field';
  baseType = 'text';

  get className() {
    let resultingClassName = this.baseClassName;

    if (this.error) {
      resultingClassName += ' pbg-form-field-error';
    }

    if (this.focused) {
      resultingClassName += ' pbg-input-focused';
    }

    return resultingClassName;
  }

  get error() { return this.props.error; }

  get hint() { return this.props.hint; }

  get focused() { return this.state.focused || !!this.error; }

  get labelType() {
    if (this.props.error) return labelTypes.ERROR;
    return labelTypes.ACTIVE;
  }

  get label() {
    const { label } = this.props;
    return label ? <div><Label type={this.labelType}>{label}</Label></div> : null;
  }

  get hintOrError() {
    if (this.error) return <div><Hint type={hintTypes.ERROR}>{this.error}</Hint></div>;
    if (this.hint) return <div><Hint>{this.hint}</Hint></div>;
    return null;
  }

  get type() { return this.props.type || this.baseType };

  get placeholder() { return !this.props.required ? this.props.label : this.props.label + '*'; }

  onFocus = () => {
    this.setState({ focused: true });
  }

  onBlur = (ev) => {
    this.setState({ focused: false });
    if (this.props.onBlur) this.props.onBlur(ev);
  }

  render() {
    const props = this.props;
    return (
      <div className={this.className}>
        {this.label}
        <input
          onBlur={this.onBlur}
          onChange={props.onChange}
          onFocus={this.onFocus}
          name={props.name}
          value={props.value}
          placeholder={this.placeholder}
          type={this.type}
        />
        {this.hintOrError}
      </div>
    );
  }
}

export { TextField };
