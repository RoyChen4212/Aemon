import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import StepProgressBar from '../../../components/consumer/mobile/step-progress-bar';
import StepProgressBarStep from '../../../components/consumer/mobile/step-progress-bar/step-progress-bar-step';

describe('StepProgressBar', () => {
  it('should have correct class name', () => {
    const wrapper = shallow(<StepProgressBar stepCount={3} progress={0} />);
    expect(wrapper.hasClass('pbg-step-progress-bar')).to.be.true;
  });

  it('should be able to have 3 steps', () => {
    const wrapper = shallow(<StepProgressBar stepCount={3} progress={0} />);
    const steps = wrapper.find(StepProgressBarStep);
    expect(steps.length).to.equal(3);
  });

  it('should be able to have 4 steps', () => {
    const wrapper = shallow(<StepProgressBar stepCount={4} progress={0} />);
    const steps = wrapper.find(StepProgressBarStep);
    expect(steps.length).to.equal(4);
  });

  it('should be able to have 5 steps', () => {
    const wrapper = shallow(<StepProgressBar stepCount={5} progress={0} />);
    const steps = wrapper.find(StepProgressBarStep);
    expect(steps.length).to.equal(5);
  });

  it('should not show any progress when progress is 0', () => {
    const wrapper = shallow(<StepProgressBar stepCount={5} progress={0} />);
    const steps = wrapper.find(StepProgressBarStep);
    let progress = false;
    steps.forEach(step => {
      if (step.prop('isComplete') === true) {
        progress = true;
      }
    });
    expect(progress).to.be.false;
  });

  it('should show progress correctly', () => {
    const wrapper = shallow(<StepProgressBar stepCount={5} progress={3} />);
    const steps = wrapper.find(StepProgressBarStep);
    const actualProgress = [];
    steps.forEach(step => {
      actualProgress.push(step.prop('isComplete'));
    });

    const expectedProgress = [true, true, true, false, false];

    actualProgress.forEach((p, index) => {
      expect(p).to.equal(expectedProgress[index]);
    });

    expect(actualProgress.length).to.equal(expectedProgress.length);
  });

  it('should show progress correctly', () => {
    const wrapper = shallow(<StepProgressBar stepCount={5} progress={1} />);
    const steps = wrapper.find(StepProgressBarStep);
    const step = steps.first().dive();

    expect(step.find('.pbg-step-progress-bar-step').hasClass('pbg-step-progress-bar-step-complete')).to.be.true;
  });
});
