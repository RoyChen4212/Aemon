import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Overlay extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    opened: PropTypes.bool.isRequired,
    onBackButtonClick: PropTypes.func.isRequired,
  };

  render() {
    const { title, opened, onBackButtonClick } = this.props;
    return (
      <div className={`pbg-overlay-container ${opened ? 'open' : ''}`}>
        <div className="pbg-overlay">
          <div className="pbg-overlay--header">
            <div className="pbg-mobile-label-link" onClick={onBackButtonClick}>&#60; Back</div>
          </div>
          <div className="pbg-mobile-heading-1">{title}</div>
          <div className="pbg-overlay--footer">
            <div className="pbg-mobile-label-link" onClick={onBackButtonClick}>&#60; Back</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Overlay;
