import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { FacebookButton } from '../button';
import './style.scss';

const baseClassName = 'pbg-consumer-desktop pbg-facebook-input';

const FacebookInput = ({ buttonLabel, hint, className, ...rest }) => (
  <div className={cx(baseClassName, className)}>
    <FacebookButton {...rest}>{buttonLabel}</FacebookButton>
    <p className="pbg-desktop-secondary-text pbg-desktop-small-text">{hint}</p>
  </div>
);

FacebookInput.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
  className: PropTypes.string,
};

FacebookInput.defaultProps = {
  className: null,
};

export default FacebookInput;
