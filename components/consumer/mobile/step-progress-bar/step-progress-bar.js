import React  from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import StepProgressBarStep from "./step-progress-bar-step";

const baseClassName = 'pbg-consumer-mobile pbg-step-progress-bar';

const StepProgressBar = ({stepCount, progress}) => {
  const steps = [];
  for (let i = 1; i <= stepCount; i += 1) {
    steps.push(<StepProgressBarStep isComplete={i<=progress} />)
  }

  return (
    <div className={baseClassName}>
      {steps}
    </div>
  )
}
StepProgressBar.propTypes = {
  stepCount: PropTypes.oneOf([3, 4, 5]).isRequired,
  progress: PropTypes.number.isRequired,
};

export default StepProgressBar;
