import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

const baseClassName = 'pbg-consumer-desktop pbg-div-input';

const DivInput = ({ className }) => <div className={cx(baseClassName, className)} />;

DivInput.propTypes = {
  className: PropTypes.string,
};

DivInput.defaultProps = {
  className: null,
};

export default DivInput;
