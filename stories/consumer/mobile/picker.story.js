import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Picker from '../../../components/consumer/mobile/picker';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const options = [
  { label: 'Choose one', value: null },
  { label: 'First option', value: 'first' },
  { label: 'Second option', value: 'second' },
  { label: 'Super long option text here', value: 'third' },
];

storiesOf('Consumer/Mobile/Form Fields/picker', module)
.addDecorator(wrapStory)
.addDecorator(withContainer)
.add('picker/default', () => (
  <FieldStateProvider
    component={Picker}
    name="picker"
    label="Label"
    hint="Hint"
    value={null}
    onChange={action('onChange')}
    options={options}
  />
))
.add('picker/error', () => (
  <Picker
    name="picker"
    label="Label"
    hint="Hint"
    error="You selection is terrible"
    onChange={action('onChange')}
    options={options}
  />
))
.add('picker/disabled', () => (
  <Picker
    name="picker"
    label="Label"
    hint="Hint"
    value={options[1].value}
    onChange={action('onChange')}
    disabled
    options={options}
  />
))
;
