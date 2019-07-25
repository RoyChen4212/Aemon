import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withContainer, wrapStory } from '../../util/decorators';
import SimpleNumberStepper from '../../../components/consumer/mobile/simple-number-stepper';

import FieldStateProvider from '../../util/field-state-provider';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Atomic Components/Inputs/simple-number-stepper', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('default', () => (
    <FieldStateProvider
      component={SimpleNumberStepper}
      name="simple-number-stepper"
      value={null}
      label="Label"
      hint="Hint"
      onChange={action('onChange')}
      range={{ min: 1, max: 100 }}
    />
  ))
  .add('error', () => (
    <FieldStateProvider
      component={SimpleNumberStepper}
      name="simple-number-stepper"
      value={null}
      label="Label"
      hint="Hint"
      error="Error"
      onChange={action('onChange')}
      range={{ min: 1, max: 100 }}
    />
  ))
  .add('disabled', () => (
    <FieldStateProvider
      component={SimpleNumberStepper}
      name="simple-number-stepper"
      value={null}
      label="Label"
      hint="Hint"
      disabled
      onChange={action('onChange')}
      range={{ min: 1, max: 100 }}
    />
  ));
