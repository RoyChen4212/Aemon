import React from 'react';
import { storiesOf } from '@storybook/react';
import SimpleNumberStepper from '../../../components/consumer/desktop/simple-number-stepper';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Form Fields', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('simple-number-stepper', () => (
    <FieldStateProvider component={SimpleNumberStepper} min={1} max={1001} value={999} />
  ));
