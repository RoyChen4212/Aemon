import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Picker from '../picker/picker';

const baseClassName = 'pbg-consumer-mobile pbg-simple-number-stepper';

const SimpleNumberStepper = ({ range, ...rest }) => {
  const options = [];
  for (let i = range.min; i <= range.max; i += 1) {
    options.push({label: i, value: i});
  }

  return (
    <div className={baseClassName}>
      <Picker options={options} {...rest} />
    </div>
  );
};

SimpleNumberStepper.propTypes = {
  range: PropTypes.shape({ min: PropTypes.number.isRequired, max: PropTypes.number.isRequired }),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

SimpleNumberStepper.defaultProps = {
  range: { min: 1, max: 100 },
};

export default SimpleNumberStepper;
