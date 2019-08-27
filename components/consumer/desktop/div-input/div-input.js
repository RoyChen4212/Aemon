import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

const baseClassName = 'pbg-consumer-desktop pbg-div-input';

const DivInput = ({ label, error, htmlId, className }) => (
  <div className={cx(baseClassName, className)}>
    {label && (
      <label className={cx('pbg-desktop-label-normal', { 'pbg-desktop-label-error': error })}>
        <span>{label}</span>
      </label>
    )}
    <div id={htmlId} className={cx('pbg-div-input-field', { 'pbg-div-input-field-error': error })} />
    {error && <span className="pbg-desktop-small-error">{error}</span>}
  </div>
);

DivInput.propTypes = {
  htmlId: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
};

DivInput.defaultProps = {
  htmlId: null,
  label: null,
  error: null,
  className: null,
};

export default DivInput;
