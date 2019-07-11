import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Overlay extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    opened: PropTypes.bool,
    backText: PropTypes.string,
    onBackButtonClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    title: 'Label',
    backText: '< back',
    opened: false
  };

  render() {
    const { title, opened, backText, onBackButtonClick } = this.props;
    if (!onBackButtonClick) return null;
    return (
      <div className={`pbg-consumer-mobile pbg-overlay ${opened ? 'open' : ''}`}>
        <div className="pbg-overlay-inner">
          <div className="pbg-overlay-inner--header">
            <div className="pbg-mobile-label-link" onClick={onBackButtonClick}>{backText}</div>
          </div>
          <div className="pbg-mobile-heading-1">{title}</div>

          <div className="pbg-overlay-inner--footer">
            <div className="pbg-mobile-label-link" onClick={onBackButtonClick}>{backText}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Overlay;
