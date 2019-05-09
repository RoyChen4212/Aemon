import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import Picker, { PICKER_EMPTY_VALUE } from '../../../components/consumer/desktop/picker';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const options = [
  { label: 'Choose one', value: PICKER_EMPTY_VALUE },
  { label: 'First option', value: 'first' },
  { label: 'Second option', value: 'second' },
  { label: 'Super long option text here', value: 'third' },
];
const figmaUrl = 'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=7%3A8';

storiesOf('Consumer/Desktop/Atomic Components/simple-picker', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('simple-picker/default', () => (
    <FieldStateProvider
      component={Picker}
      name="picker"
      label="Label"
      hint="Select one awesome value"
      value={null}
      onChange={action('onChange')}
      options={options}
      simple
    />
  ))
  .add('simple-picker/open', () => (
    <FieldStateProvider
      component={Picker}
      name="picker"
      label="Label"
      hint="Select one awesome value"
      value={null}
      onChange={action('onChange')}
      options={options}
      simple
    />
  ))
  .add('simple-picker/error', () => (
    <FieldStateProvider
      component={Picker}
      name="picker"
      label="Label"
      error="This field has an error"
      hint="Select one awesome value"
      value={null}
      onChange={action('onChange')}
      options={options}
      simple
    />
  ))
  .add('simple-picker/disabled', () => (
    <FieldStateProvider
      component={Picker}
      name="picker"
      label="Label"
      error="This field has an error"
      hint="Select one awesome value"
      value={null}
      onChange={action('onChange')}
      options={options}
      simple
      disabled
    />
  ))
  .add('simple-picker/big', () => (
    <FieldStateProvider
      component={Picker}
      name="picker"
      label="Label"
      hint="Select one awesome value"
      value={null}
      onChange={action('onChange')}
      options={options}
      simple
      big
    />
  ));

storiesOf('Consumer/Desktop/Form Fields/picker', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('picker/default', () => (
    <FieldStateProvider
      component={Picker}
      name="picker"
      label="Label"
      hint="Select one awesome value"
      value={null}
      onChange={action('onChange')}
      options={options}
    />
  ))
  .add('picker/error', () => (
    <FieldStateProvider
      component={Picker}
      name="picker"
      label="Label"
      error="This field has an error"
      hint="Select one awesome value"
      value={null}
      onChange={action('onChange')}
      options={options}
    />
  ))
  .add('picker/disabled', () => (
    <FieldStateProvider
      component={Picker}
      name="picker"
      label="Label"
      hint="Select one awesome value"
      value={null}
      onChange={action('onChange')}
      options={options}
      disabled
    />
  ));