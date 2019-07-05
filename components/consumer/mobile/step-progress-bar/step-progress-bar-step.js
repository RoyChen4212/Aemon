import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-step-progress-bar-step';

const StepProgressBarStep = ({ isComplete }) => (
  <div className={cx(baseClassName, { 'pbg-step-progress-bar-step-complete': isComplete })} />
);

StepProgressBarStep.propTypes = {
  isComplete: PropTypes.bool.isRequired,
};

export default StepProgressBarStep;
