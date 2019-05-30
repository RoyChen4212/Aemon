import React from 'react';

export const CLASS_NAME = 'pbg-button';

class BaseButton extends React.PureComponent {
  baseClassName = CLASS_NAME;
  state = {
    active: false,
  }

  get buttonType() {
    return !!this.props.onClick ? 'button' : 'submit';
  }

  get className() {
    const { disabled, className } = this.props;
    const base = className ? `${this.baseClassName} ${className}` :  this.baseClassName;
    const disabledClass = disabled ? base + ' disabled' : base;
    const activeClass = this.state.active ? disabledClass + ' pbg-button-active' : disabledClass;
    return activeClass;
  }

  get hint() {
    throw new Error('Not implemented, Implement this method in a sub-class');
  }

  activate = () => {
    this.setState({ active: true });
  }

  deactivate = () => {
    this.setState({ active: false });
  }

  onClick = (ev) => {
    if (this.props.disabled) return;
    if ((typeof this.props.onClick) === 'function') return this.props.onClick(ev);
  }

  renderHint(Hint) {
    if (this.props.hint) {
      return (
        <div className="pbg-button-hint-container">
          <Hint>{this.props.hint}</Hint>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <button
          type={this.buttonType}
          className={this.className}
          onClick={this.onClick}
          onMouseDown={this.activate}
          onMouseUp={this.deactivate}
          disabled={this.props.disabled}
        >
          <span>{this.props.children}</span>
        </button>
        { this.hint }
      </div>
    );
  }
}

export default BaseButton;
