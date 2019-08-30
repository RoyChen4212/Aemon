import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.scss';

class Banner extends React.PureComponent {
  static COLORS = {
    DARK_BLUE: 'dark-blue',
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.oneOf([Banner.COLORS.DARK_BLUE]),
    className: PropTypes.string,
  };

  static defaultProps = {
    color: Banner.COLORS.DARK_BLUE,
    className: null,
  };

  render() {
    const { text, color, className } = this.props;
    const classNameTotal = classnames(
      'pbg-banner',
      {
        'pbg-banner-dark-blue': color === Banner.COLORS.DARK_BLUE,
      },
      className
    );

    return <div className={classNameTotal}>{text}</div>;
  }
}

export default Banner;
