import React from 'react';

export const CLASS_NAME = 'pbg-button';

class BaseButton extends React.PureComponent {
  baseClassName = CLASS_NAME;

  get buttonType() {
    return !!this.props.onClick ? 'button' : 'submit';
  }

  get className() {
    const { disabled, className } = this.props;
    const base = className ? `${this.baseClassName} ${className}` :  this.baseClassName;
    return disabled ? base + ' disabled' : base;
  }

  get hint() {
    throw new Error('Not implemented, Implement this method in a sub-class');
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
