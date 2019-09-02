import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import BaseAvatar from '../../shared/base-avatar';

const Avatar = ({ className, ...restProps }) => (
  <BaseAvatar {...restProps} className={cx('pbg-consumer-desktop', className)} />
);

Avatar.propTypes = {
  className: PropTypes.string,
};

Avatar.defaultProps = {
  className: null,
};

export default Avatar;
