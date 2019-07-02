import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DatetimePicker } from '../../../components/consumer/mobile/form-fields';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Form Fields/datetime-picker', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('datetime-picker/simple', () => (
    <FieldStateProvider
      component={DatetimePicker}
      name="date-picker"
      value={new Date()}
      hint="Pick date and time"
      timezone="America/Mexico_City"
      onChange={action('onChange')}
    />
  ))
  .add('datetime-picker/default', () => (
    <FieldStateProvider
      component={DatetimePicker}
      name="date-picker"
      value={new Date()}
      label="Label"
      hint="Pick a date and a time"
      timezone="America/Mexico_City"
      onChange={action('onChange')}
    />
  ))
  .add('datetime-picker/error', () => (
    <FieldStateProvider
      component={DatetimePicker}
      name="date-picker"
      value={new Date()}
      error="Terrible error"
      timezone="America/Mexico_City"
      onChange={action('onChange')}
    />
  ));
