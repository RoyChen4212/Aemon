import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
    iconType: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
    submitting: false,
    className: null,
    hint: null,
    children: null,
    onClick: null,
    iconType: null,
  };

  state = {
    active: false,
  };

  get buttonType() {
    const { onClick } = this.props;
    return onClick ? 'button' : 'submit';
  }

  get className() {
    const { disabled, className, submitting } = this.props;
    const { active } = this.state;
    return classnames(this.baseClassName, className, {
      disabled,
      submitting,
      'pbg-button-active': active,
    });
  }

  activate = () => {
    this.setState({ active: true });
  };

  deactivate = () => {
    this.setState({ active: false });
  };

  onClick = ev => {
    const { disabled, submitting, onClick } = this.props;
    if (disabled || submitting) return;
    if (typeof onClick === 'function') onClick(ev);
  };

  onMouseDown = () => this.activate();

  onMouseUp = () => this.deactivate();

  onMouseOut = () => this.deactivate();

  onBlur = () => this.deactivate();

  renderHint(Hint) {
    const { hint } = this.props;
    if (!hint) return null;

    return (
      <div className="pbg-button-hint-container">
        <Hint>{hint}</Hint>
      </div>
    );
  }

  render() {
    const { disabled, submitting, children, iconType } = this.props;
    return (
      <div>
        {/* eslint-disable-next-line react/button-has-type */}
        <button
          type={this.buttonType}
          className={this.className}
          onClick={this.onClick}
          onMouseDown={this.onMouseDown}
          onMouseOut={this.onMouseOut}
          onMouseUp={this.onMouseUp}
          onBlur={this.onBlur}
          disabled={disabled || submitting}
        >
          <span className={classnames({ 'pbg-button-icon': iconType })}>
            {children}
            {iconType && <i className={classnames({ [`pbg-icon-${iconType}-button`]: iconType })} />}
          </span>
        </button>
        {this.renderHint()}
      </div>
    );
  }
}

export default BaseButton;
