import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaults from './defaults';
import './style.css';

class Avatar extends React.PureComponent {
  static DEFAULT_SIZE = 35

  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.number.isRequired,
    src: PropTypes.string,
  }

  static defaultProps = {
    className: '',
    size: Avatar.DEFAULT_SIZE
  }

  state = {
    hasError: false
  }

  handleError = () => {
    this.setState({ hasError: true });
  }

  getFallbackImageProps = () => {
    const { userId } = this.props;
    const { colors, shapes } = defaults;

    if (!userId) {
      return {
        color: colors[0],
        shape: shapes[0]
      };
    }

    const index = parseInt(userId, 16);

    return {
      color: colors[index % colors.length],
      shape: shapes[index % shapes.length]
    };
  }

  renderFallbackAvatar = () => {
    const { className, size } = this.props;
    const { color, shape } = this.getFallbackImageProps();

    return (
      <svg
        className={classnames('pbg-avatar', className)}
        xmlns='http://www.w3.org/2000/svg'
        width={size}
        height={size}
        viewBox={`0 0 51 51`}
      >
        <path
          d={shape}
          fill={color}
          fillRule='evenodd'
        />
      </svg>
    );
  }

  render() {
    const { className, size, src } = this.props;
    const { hasError } = this.state;

    if (!src || hasError) return this.renderFallbackAvatar();

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
}

export default Avatar;
