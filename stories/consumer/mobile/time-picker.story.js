import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TimePicker from '../../../components/consumer/mobile/time-picker';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Form Fields/time-picker', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('time-picker/default', () => (
    <FieldStateProvider
      component={TimePicker}
      name="time-picker"
      label="Pick a time"
      hint="Select or suffer"
      required
      value="11:40"
      onChange={action('onChange')}
    />
  ))
  .add('time-picker/error', () => (
    <FieldStateProvider
      component={TimePicker}
      name="time-picker"
      hint="Pick a time"
      error="Terrible error here"
      value="10:10"
      onChange={action('onChange')}
    />
  ));
