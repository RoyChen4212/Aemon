import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-form-field pbg-checkbox';

const Checkbox = ({ name, onChange, value, label, error, disabled }) => {
  return (
    <div className={cx(baseClassName, { 'pbg-form-field-error': error, 'pbg-form-field-disabled': disabled })}>
      <label htmlFor={name} className="pbg-checkbox-label">
        <input type="checkbox" id={name} defaultChecked={value} onChange={onChange} disabled={disabled} />
        <span className="pbg-checkbox-custom" />
      </label>
      {label && <div className="pbg-checkbox-label-text pbg-mobile-label-normal">{label}</div>}
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  value: false,
  error: null,
  disabled: false,
};

export default Checkbox;
