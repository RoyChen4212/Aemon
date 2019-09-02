import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BaseHint from '../../shared/base-hint';
import './style.scss';

export * from '../../shared/base-hint';
const Hint = ({ className, ...props }) => <BaseHint {...props} className={cx('pbg-consumer-mobile', className)} />;

Hint.propTypes = {
  className: PropTypes.string,
};

Hint.defaultProps = {
  className: null,
};

export default Hint;
