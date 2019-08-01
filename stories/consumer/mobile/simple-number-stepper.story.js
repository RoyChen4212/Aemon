import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withContainer, wrapStory } from '../../util/decorators';
import SimpleNumberStepper from '../../../components/consumer/mobile/simple-number-stepper';

import FieldStateProvider from '../../util/field-state-provider';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Form Fields/number-picker', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('simple', () => (
    <FieldStateProvider
      component={SimpleNumberStepper}
      name="simple-number-stepper"
      value={null}
      onChange={action('onChange')}
      min={1}
      max={100}
    />
  ))
  .add('default', () => (
    <FieldStateProvider
      component={SimpleNumberStepper}
      name="simple-number-stepper"
      value={null}
      label="Label"
      hint="Hint"
      onChange={action('onChange')}
      min={1}
      max={100}
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
      min={1}
      max={100}
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
      min={1}
      max={100}
    />
  ));
