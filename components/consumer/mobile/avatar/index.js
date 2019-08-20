import React from 'react';
import cx from 'classnames';
import BaseAvatar from '../../shared/base-avatar';

const Avatar = ({ size, className, ...restProps }) => (
  <BaseAvatar {...restProps} className={cx('pbg-consumer-mobile', className)} size={size || 32} />
);

Avatar.propTypes = {
  ...BaseAvatar.propTypes,
};

Avatar.defaultProps = {
  ...BaseAvatar.defaultProps,
};

export default Avatar;
