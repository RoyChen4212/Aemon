import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.scss';

/** @extends React.Component */
class Alert extends React.PureComponent {
  baseClass = 'pbg-consumer-mobile pbg-alert';

  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    error: PropTypes.bool,
    warning: PropTypes.bool,
    success: PropTypes.bool,
    ctaLabel: PropTypes.string,
    onCallToAction: PropTypes.func,
    onCloseClick: PropTypes.func,
  };

  static defaultProps = {
    title: null,
    text: null,
    error: false,
    warning: false,
    success: false,
    ctaLabel: 'Call to action',
    onCallToAction: () => {},
    onCloseClick: () => {},
  };

  get className() {
    const { error, warning, success } = this.props;

    return classnames(this.baseClass, {
      'pbg-alert-success': success,
      'pbg-alert-warning': warning,
      'pbg-alert-error': error,
    });
  }

  render() {
    const { title, text, onCallToAction, ctaLabel, onCloseClick } = this.props;

    return (
      <div className={this.className}>
        <button type="button" className="pbg-alert-close-button" onClick={onCloseClick} />

        <div className="pbg-mobile-label-strong">
          <span>{title}</span>
        </div>

        <p className="pbg-mobile-paragraph">{text}</p>

        <div className="pbg-alert-divider" />

        <button type="button" className="pbg-button pbg-consumer-mobile pbg-button-link" onClick={onCallToAction}>
          <span>{ctaLabel}</span>
        </button>
      </div>
    );
  }
}

export default Alert;
