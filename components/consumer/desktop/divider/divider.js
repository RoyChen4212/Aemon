import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const baseClassName = 'pbg-consumer-desktop pbg-divider';

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
      <div className={className ? `${baseClassName} ${className}` : baseClassName}>
        <div>
          <span className='pbg-desktop-secondary-text pbg-desktop-strong-text pbg-desktop-upcase-text'>{label}</span>
          {hint && <span className='pbg-desktop-secondary-text pbg-desktop-italic-text'>{hint}</span>}
        </div>
      </div>
    )
  }
};

export default Divider;
