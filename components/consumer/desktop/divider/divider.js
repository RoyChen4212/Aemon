import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Divider extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    hint: PropTypes.string
  }

  static defaultProps = {
    className: null,
    label: null,
    hint: null
  };

  render() {
    const { className, label, hint } = this.props;
    return (
      <div className={`pbg-consumer-desktop pbg-divider${className ? ` ${className}` : ''}${!!label ? ' has-label' : ''}`}>
        <div className="pbg-divider--line" />
        {
          (!!label) && <div className="pbg-divider--text">
            {label && <span className='pbg-desktop-secondary-text pbg-desktop-small-strong pbg-desktop-upcase-text'>{label}</span>}
            {hint && <span className='pbg-desktop-secondary-text pbg-desktop-small-text pbg-desktop-italic-text pbg-divider-hint'>{hint}</span>}
          </div>
        }
      </div>
    )
  }
};

export default Divider;
