import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BaseLabel from '../../shared/base-label';

import './style.scss';

export * from '../../shared/base-label';

const Label = props => {
  const { className } = props;
  return <BaseLabel {...props} className={cx('pbg-consumer-desktop', className)} />;
};

Label.propTypes = {
  className: PropTypes.string,
};

Label.defaultProps = {
  className: null,
};

export default Label;
