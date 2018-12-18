import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Picker } from '../../../components/consumer/mobile/form-fields';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

const options = [
  { label: 'Choose one', value: 'choose' },
  { label: 'First option', value: 'first' },
  { label: 'Second option', value: 'second' },
  { label: 'Super long option text here', value: 'third' },
];

storiesOf('Form Fields/Picker', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Valid', () => (
    <Picker
      name="picker"
      label="Label"
      hint="Select one awesome value"
      onChange={action('onChange')}
      options={options}
    />
  ))
  .add('Valid/Required', () => (
    <Picker
      name="picker"
      label="Label"
      onChange={action('onChange')}
      required
      options={options}
    />
  ))
  .add('Invalid', () => (
    <Picker
      name="picker"
      label="Label"
      hint="Select one awesome value"
      error="You selection is terrible"
      onChange={action('onChange')}
      options={options}
    />
  ));
