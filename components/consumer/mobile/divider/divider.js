import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-divider';

class Divider extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { className } = this.props;
    return <div className={classnames(baseClassName, className)} />;
  }
}

export default Divider;
