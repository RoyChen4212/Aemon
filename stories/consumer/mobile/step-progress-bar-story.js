import React from 'react';
import { storiesOf } from '@storybook/react';
import StepProgressBar from '../../../components/consumer/mobile/step-progress-bar';

import { withContainer, withMobileSizing, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Section Components/step-progress-bar', module)
  .addDecorator(wrapStory)
  .addDecorator(withMobileSizing)
  .addDecorator(withContainer)
  .add('tree-step/no-progress', () => (
    <div>
      <h4 className="text-center">3 Steps No Progress </h4>
      <StepProgressBar stepCount={3} progress={0} />
    </div>
  ))
  .add('tree-step/with-progress', () => (
    <div>
      <h4 className="text-center">3 Steps With Progress </h4>
      <StepProgressBar stepCount={3} progress={2} />
    </div>
  ))
  .add('four-step/no-progress', () => (
    <div>
      <h4 className="text-center">4 Steps No Progress </h4>
      <StepProgressBar stepCount={4} progress={0} />
    </div>
  ))
  .add('four-step/with-progress', () => (
    <div>
      <h4 className="text-center">4 Steps With Progress </h4>
      <StepProgressBar stepCount={4} progress={3} />
    </div>
  ))
  .add('five-step/no-progress', () => (
    <div>
      <h4 className="text-center">5 Steps No Progress </h4>
      <StepProgressBar stepCount={5} progress={0} />
    </div>
  ))
  .add('five-step/with-progress', () => (
    <div>
      <h4 className="text-center">5 Steps With Progress </h4>
      <StepProgressBar stepCount={5} progress={3} />
    </div>
  ))
  .add('five-step/full-progress', () => (
    <div>
      <h4 className="text-center">5 Steps Full Progress </h4>
      <StepProgressBar stepCount={5} progress={5} />
    </div>
  ));
