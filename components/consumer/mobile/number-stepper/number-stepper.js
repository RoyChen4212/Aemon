import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';
import Picker from '../picker';

const baseClassName = 'pbg-consumer-mobile pbg-number-stepper';

const NumberStepper = ({ min, max, className, ...rest }) => {
  const options = [];
  for (let i = min; i <= max; i += 1) {
    options.push({ label: i, value: i });
  }

  return (
    <div className={cx(baseClassName, className)}>
      <Picker options={options} {...rest} />
    </div>
  );
};

NumberStepper.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

NumberStepper.defaultProps = {
  className: null,
};

export default NumberStepper;
