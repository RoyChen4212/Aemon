import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';
import Checkbox from '../checkbox';

const baseClassName = 'pbg-consumer-mobile pbg-claim-toggle';

const ClaimToggle = ({ label, secondaryText, onChange, value, error }) => (
  <div className={baseClassName}>
    <div className="pbg-claim-toggle-content">
      <Checkbox onChange={onChange} value={value} />
      {<div className={cx('pbg-claim-toggle-primary-text', { error })}>{label}</div>}
    </div>
    {secondaryText && <div className="pbg-claim-toggle-secondary-text">{secondaryText}</div>}
  </div>
);

ClaimToggle.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool,
  secondaryText: PropTypes.string,
  error: PropTypes.bool,
};

ClaimToggle.defaultProps = {
  secondaryText: null,
  value: false,
  error: false,
};

export default ClaimToggle;
