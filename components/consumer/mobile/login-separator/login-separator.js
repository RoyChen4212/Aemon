import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-login-separator';

const LoginSeparator = ({ label, className }) => (
  <div className={cx(baseClassName, className)}>
    <div className="pbg-login-separator-line" />
    <div className="pbg-mobile-label-normal">{label}</div>
    <div className="pbg-login-separator-line" />
  </div>
);

LoginSeparator.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

LoginSeparator.defaultProps = {
  className: null,
};

export default LoginSeparator;
