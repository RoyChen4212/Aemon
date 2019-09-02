import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BaseHint from '../../shared/base-hint';

import './style.scss';

export * from '../../shared/base-hint';
const Hint = ({ className, ...restProps }) => (
  <BaseHint {...restProps} className={cx('pbg-consumer-desktop', className)} />
);

Hint.propTypes = {
  className: PropTypes.string,
};

Hint.defaultProps = {
  className: null,
};

export default Hint;
