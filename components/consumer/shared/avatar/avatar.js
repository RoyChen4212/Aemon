import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaults from './defaults';

import './style.scss';

class Avatar extends React.PureComponent {
  static DEFAULT_SIZE = 32;

  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.number.isRequired,
    src: PropTypes.string,
    fullName: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    size: Avatar.DEFAULT_SIZE,
  };

  state = {
    hasError: false,
  };

  handleError = () => {
    this.setState({ hasError: true });
  };

  getFallbackImageProps = () => {
    const { userId } = this.props;
    const { colors } = defaults;

    if (!userId) {
      return {
        color: colors[0],
      };
    }

    const index = parseInt(userId, 16);

    return {
      color: colors[index % colors.length],
    };
  };

  getInitials = () => {
    const { fullName } = this.props;

    if (!fullName) return false;

    const nameArray = fullName.split(' ');
    return nameArray
      .filter((word, idx) => idx === 0 || idx === nameArray.length - 1)
      .map(i => i.substr(0, 1).toUpperCase())
      .join('');
  };

  renderInitials = () => {
    const { className, size } = this.props;
    const { color } = this.getFallbackImageProps();
    const initials = this.getInitials();

    let classNames = classnames('pbg-avatar', className);

    if (initials.length === 1) {
      classNames = classnames(classNames, 'single');
    }

    return (
      <div
        className={classNames}
        style={{
          backgroundColor: color,
          width: `${size}px`,
          height: `${size}px`,
        }}
      >
        <div>{initials}</div>
      </div>
    );
  };

  renderFallbackAvatar = () => {
    const { className, size } = this.props;
    const { color } = this.getFallbackImageProps();

    return (
      <svg
        className={classnames('pbg-avatar', className)}
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={color}
          d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
        />
        <path
          d="M16.1367 6.25714C13.1007 6.25714 10.6367 8.72119 10.6367 11.7572V14.9913C10.6367 18.0274 13.1007 20.4914 16.1367 20.4914C19.1727 20.4914 21.6367 18.0274 21.6367 14.9913V11.7572C21.6367 8.72119 19.1727 6.25714 16.1367 6.25714Z"
          stroke="white"
        />
        <path
          d="M24.0677 22.6036C24.7497 22.9886 25.4097 23.4286 26.0367 23.9126C26.7297 24.4516 27.1367 25.2876 27.1367 26.1897V32.1801C27.1367 33.7531 25.9047 34.1149 24.3867 34.1149H7.88672C6.36872 34.1149 5.13672 33.7531 5.13672 32.1801V26.1897C5.13672 25.2876 5.54372 24.4516 6.23672 23.9126C6.86372 23.4286 7.52371 22.9886 8.20571 22.6036"
          stroke="white"
        />
      </svg>
    );
  };

  render() {
    const { className, size, src } = this.props;
    const { hasError } = this.state;
    const initials = this.getInitials();

    if (src && !hasError) {
      return (
        <img
          className={classnames('pbg-avatar', className)}
          height={size}
          src={src}
          width={size}
          onError={this.handleError}
        />
      );
    }

    if (initials.length) {
      return this.renderInitials();
    }

    return this.renderFallbackAvatar();
  }
}

export default Avatar;
