import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.css';

class Banner extends React.PureComponent {
  static COLORS = {
    DARK_BLUE: 'dark-blue',
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.oneOf([Banner.COLORS.DARK_BLUE]),
  };

  static defaultProps = {
    color: Banner.COLORS.DARK_BLUE,
  };

  render() {
    const { text, color } = this.props;
    const className = classnames('pbg-banner', {
      'pbg-banner-dark-blue': color === Banner.COLORS.DARK_BLUE,
    });

    return <div className={className}>{text}</div>;
  }
}

export default Banner;
