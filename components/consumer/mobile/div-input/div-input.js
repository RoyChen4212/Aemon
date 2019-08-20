import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-div-input';

const DivInput = ({ label, error }) => (
  <div className={baseClassName}>
    {label && (
      <label className={cx('pbg-mobile-label-normal', { 'pbg-mobile-label-error': error })}>
        <span>{label}</span>
      </label>
    )}
    <div className={cx('pbg-div-input-field', { 'pbg-div-input-field-error': error })} />
    {error && <span className="pbg-mobile-small-error">{error}</span>}
  </div>
);

DivInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
};

DivInput.defaultProps = {
  label: null,
  error: null,
};

export default DivInput;
