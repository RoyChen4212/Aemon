import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DatePicker } from '../../../components/consumer/mobile/form-fields';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Form Fields/date-picker', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('date-picker/simple', () => (
    <FieldStateProvider
      component={DatePicker}
      name="date-picker"
      value={new Date()}
      hint="Pick a Date"
      onChange={action('onChange')}
    />
  ))
  .add('date-picker/default', () => (
    <FieldStateProvider
      component={DatePicker}
      name="date-picker"
      label="Awesome date"
      hint="Pick a date or suffer"
      required
      value="1984-10-19"
      onChange={action('onChange')}
    />
  ))
  .add('date-picker/error', () => (
    <FieldStateProvider
      component={DatePicker}
      name="date-picker"
      hint="Pick a date"
      error="Terrible error here"
      onChange={action('onChange')}
    />
  ));
