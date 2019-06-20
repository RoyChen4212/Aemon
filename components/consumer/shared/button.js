import React from 'react';
import PropTypes from 'prop-types';

export const CLASS_NAME = 'pbg-button';

class BaseButton extends React.PureComponent {
  baseClassName = CLASS_NAME;

  static propTypes = {
    disabled: PropTypes.bool,
    submitting: PropTypes.bool,
    className: PropTypes.string,
    hint: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    disabled: false,
    submitting: false,
    className: null,
    hint: null,
    children: null,
    onClick: null,
  };

  state = {
    active: false,
  };

  get buttonType() {
    return this.props.onClick ? 'button' : 'submit';
  }

  get className() {
    const { disabled, className, submitting } = this.props;
    const base = className ? `${this.baseClassName} ${className}` : this.baseClassName;
    const disabledClass = disabled ? `${base} disabled` : base;
    const submittingClass = submitting ? `${disabledClass} submitting` : disabledClass;
    const activeClass = this.state.active ? `${submittingClass} pbg-button-active` : submittingClass;
    return activeClass;
  }

  get hint() {
    throw new Error('Not implemented, Implement this method in a sub-class');
  }

  activate = () => {
    this.setState({ active: true });
  };

  deactivate = () => {
    this.setState({ active: false });
  };

  onClick = ev => {
    if (this.props.disabled || this.props.submitting) return;
    if (typeof this.props.onClick === 'function') this.props.onClick(ev);
  };

  renderHint(Hint) {
    if (this.props.hint) {
      return (
        <div className="pbg-button-hint-container">
          <Hint>{this.props.hint}</Hint>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <button
          type={this.buttonType}
          className={this.className}
          onClick={this.onClick}
          onMouseDown={this.activate}
          onMouseOut={this.deactivate}
          onMouseUp={this.deactivate}
          disabled={this.props.disabled || this.props.submitting}
        >
          <span>{this.props.children}</span>
        </button>
        {this.hint}
      </div>
    );
  }
}

export default BaseButton;
