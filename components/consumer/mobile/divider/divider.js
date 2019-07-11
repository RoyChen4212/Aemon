import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-divider';

class Divider extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: null
  };
  
  render() {
    const { className } = this.props;
    return (
      <div className={className ? `${baseClassName} ${className}` : baseClassName}>
      </div>
    )
  }
};

export default Divider;