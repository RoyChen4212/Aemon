import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DatetimePicker } from '../../../components/consumer/mobile/form-fields';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Form Fields/Datetime Picker', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Valid', () => (
    <FieldStateProvider
      component={DatetimePicker}
      name="date-picker"
      value={new Date()}
      hint="Pick date and time"
      timezone="America/Mexico_City"
      onChange={action('onChange')}
    />
  ))
  .add('Valid/No Value', () => (
    <FieldStateProvider
      component={DatetimePicker}
      name="date-picker"
      timezone="America/Mexico_City"
      hint="Pick date and time"
      onChange={action('onChange')}
    />
  ))
  .add('Valid/With a Label', () => (
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
  .add('Invalid', () => (
    <FieldStateProvider
      component={DatetimePicker}
      name="date-picker"
      value={new Date()}
      error="Terrible error"
      timezone="America/Mexico_City"
      onChange={action('onChange')}
    />
  ));
