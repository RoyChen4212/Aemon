import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.scss';

export const alertTypes = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};

/** @extends React.Component */
class Alert extends React.PureComponent {
  baseClass = 'pbg-consumer-mobile pbg-alert';

  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.oneOf([alertTypes.SUCCESS, alertTypes.WARNING, alertTypes.ERROR]),
    ctaLabel: PropTypes.string,
    onCallToAction: PropTypes.func,
    onCloseClick: PropTypes.func,
  };

  static defaultProps = {
    title: null,
    text: null,
    type: alertTypes.SUCCESS,
    ctaLabel: 'Call to action',
    onCallToAction: () => {},
    onCloseClick: () => {},
  };

  get className() {
    const { type } = this.props;

    return classnames(this.baseClass, {
      'pbg-alert-success': type === alertTypes.SUCCESS,
      'pbg-alert-warning': type === alertTypes.WARNING,
      'pbg-alert-error': type === alertTypes.ERROR,
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
