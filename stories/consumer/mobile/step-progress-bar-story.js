import React from 'react';
import { storiesOf } from '@storybook/react';
import StepProgressBar from '../../../components/consumer/mobile/step-progress-bar';

import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Section Components/step-progress-bar', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('three-step/no-progress', () => <StepProgressBar stepCount={3} progress={0} />)
  .add('three-step/with-progress', () => <StepProgressBar stepCount={3} progress={2} />)
  .add('four-step/no-progress', () => <StepProgressBar stepCount={4} progress={0} />)
  .add('four-step/with-progress', () => <StepProgressBar stepCount={4} progress={3} />)
  .add('five-step/no-progress', () => <StepProgressBar stepCount={5} progress={0} />)
  .add('five-step/with-progress', () => <StepProgressBar stepCount={5} progress={3} />)
  .add('five-step/full-progress', () => <StepProgressBar stepCount={5} progress={5} />);
