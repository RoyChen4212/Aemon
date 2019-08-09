import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-login-separator';

const LoginSeparator = ({label}) => (<div className={baseClassName}>
  <div className="pbg-login-separator-line" />
  <div className="pbg-mobile-label-normal">{label}</div>
  <div className="pbg-login-separator-line" />
</div>);

LoginSeparator.propTypes = {
  label: PropTypes.string.isRequired,
};

export default LoginSeparator;
