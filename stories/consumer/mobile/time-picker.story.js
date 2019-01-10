import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  TimePicker,
} from '../../../components/consumer/mobile/form-fields';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const customFormater = () => 'Formated by custom formater';

storiesOf('Consumer/Mobile/Form Fields/Time Picker', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Valid', () => (
    <FieldStateProvider
      component={TimePicker}
      name="time-picker"
      value="12:32"
      hint="With no label"
      onChange={action('onChange')}
    />
  ))
  .add('Valid/No Value', () => (
    <FieldStateProvider
      component={TimePicker}
      name="time-picker"
      value=""
      hint="Pick a time"
      onChange={action('onChange')}
    />
  ))
  .add('Valid/Required', () => (
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
  .add('Valid/Custom Formater', () => (
    <FieldStateProvider
      component={TimePicker}
      name="time-picker"
      hint="Pick a time"
      value="10:00"
      formater={customFormater}
      onChange={action('onChange')}
    />
  ))
  .add('Invalid', () => (
    <FieldStateProvider
      component={TimePicker}
      name="time-picker"
      hint="Pick a time"
      error="Terrible error here"
      value="10:10"
      onChange={action('onChange')}
    />
  ))
