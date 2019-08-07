import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.scss';

class Overlay extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    opened: PropTypes.bool,
    backText: PropTypes.string,
    onBackButtonClick: PropTypes.func.isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    title: '',
    backText: '',
    opened: false,
    children: null,
  };

  render() {
    const { title, opened, backText, onBackButtonClick, children } = this.props;
    if (!onBackButtonClick) return null;
    return (
      <div className={classnames('pbg-consumer-mobile pbg-desktop-shadow-level-two pbg-overlay', { open: opened })}>
        <div className="pbg-overlay-inner">
          <div className="pbg-overlay-inner--header">
            <div className="pbg-mobile-label-link" onClick={onBackButtonClick}>
              <span className="pbg-overlay-back-button">{backText}</span>
            </div>
          </div>
          <div className="pbg-mobile-heading-1">{title}</div>

          <div className="pbg-overlay-content">{children}</div>

          <div className="pbg-overlay-inner--footer">
            <div className="pbg-mobile-label-link" onClick={onBackButtonClick}>
              <span className="pbg-overlay-back-button">{backText}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overlay;
