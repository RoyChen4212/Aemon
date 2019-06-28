import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DatePicker } from '../../../components/consumer/mobile/form-fields';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const customFormater = dateStr => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date = new Date(dateStr);
  return date.toLocaleDateString('de-DE', options);
};

storiesOf('Consumer/Mobile/Form Fields/Date Picker', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Valid', () => (
    <FieldStateProvider
      component={DatePicker}
      name="date-picker"
      value={new Date()}
      hint="Pick a Date"
      onChange={action('onChange')}
    />
  ))
  .add('Valid/No Value', () => (
    <FieldStateProvider component={DatePicker} name="date-picker" hint="Pick a date" onChange={action('onChange')} />
  ))
  .add('Valid/Required', () => (
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
  .add('Valid/Custom Formater', () => (
    <FieldStateProvider
      component={DatePicker}
      name="date-picker"
      hint="Pick a date"
      value="1984-10-19"
      formater={customFormater}
      onChange={action('onChange')}
    />
  ))
  .add('Invalid', () => (
    <FieldStateProvider
      component={DatePicker}
      name="date-picker"
      hint="Pick a date"
      error="Terrible error here"
      onChange={action('onChange')}
    />
  ));
