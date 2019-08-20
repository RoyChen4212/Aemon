import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Label, { labelTypes } from '../label';

import './style.scss';

class ModalAlert extends React.PureComponent {
  baseClass = 'pbg-consumer-desktop pbg-modal-alert';

  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    error: PropTypes.bool,
    warning: PropTypes.bool,
    success: PropTypes.bool,
    onTextClick: PropTypes.func,
    hideAfter: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    text: '',
    error: false,
    warning: false,
    success: false,
    onTextClick: null,
    hideAfter: null,
    className: null,
  };

  state = { hide: false };

  get className() {
    const { error, warning, success, className } = this.props;
    const { hide } = this.state;

    return classnames(this.baseClass, className, {
      'pbg-fade-out': hide,
      'pbg-modal-alert-error': error,
      'pbg-modal-alert-warning': warning,
      'pbg-modal-alert-success': success,
    });
  }

  componentDidMount() {
    const { hideAfter } = this.props;
    if (hideAfter) {
      setTimeout(() => this.setState({ hide: true }), hideAfter);
    }
  }

  renderText() {
    const { text, onTextClick } = this.props;
    return onTextClick ? <a onClick={onTextClick}>{text}</a> : text;
  }

  render() {
    const { title } = this.props;
    return (
      <div className={this.className}>
        <Label className="pbg-modal-alert-title" type={labelTypes.STRONG}>
          {title}
        </Label>
        <Label className="pbg-modal-alert-text">{this.renderText()}</Label>
      </div>
    );
  }
}

export default ModalAlert;
