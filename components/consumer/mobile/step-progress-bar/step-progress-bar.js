import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';
import StepProgressBarStep from './step-progress-bar-step';

const baseClassName = 'pbg-consumer-mobile pbg-step-progress-bar';

const StepProgressBar = ({ stepCount, progress, className }) => {
  const steps = [];
  for (let i = 1; i <= stepCount; i += 1) {
    steps.push(<StepProgressBarStep isComplete={i <= progress} />);
  }

  return <div className={cx(baseClassName, className)}>{steps}</div>;
};

StepProgressBar.propTypes = {
  stepCount: PropTypes.oneOf([3, 4, 5]).isRequired,
  progress: PropTypes.number.isRequired,
  className: PropTypes.string,
};

StepProgressBar.defaultProps = {
  className: null,
};

export default StepProgressBar;
