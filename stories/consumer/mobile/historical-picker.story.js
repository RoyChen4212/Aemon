import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import HistoricalPicker from '../../../components/consumer/mobile/historical-picker';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const options = [
  { label: 'First option', value: 'first' },
  { label: 'Second option', value: 'second' },
  { label: 'Super long option text here', value: 'third' },
];

storiesOf('Consumer/Mobile/Form Fields/historical-picker', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('historical-picker/default', () => (
    <HistoricalPicker
      name="picker"
      hint="Pick a value or use default"
      onChange={action('onChange')}
      options={options}
    />
  ))
  .add('historical-picker/error', () => (
    <HistoricalPicker name="picker" error="You selection is terrible" onChange={action('onChange')} options={options} />
  ));
