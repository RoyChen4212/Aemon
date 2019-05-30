import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import Picker, { PICKER_EMPTY_VALUE } from '../../../components/consumer/desktop/picker';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const simpleOptions = [
  { label: { term: 'Choose one' }, value: PICKER_EMPTY_VALUE },
  { label: { term: 'First option' }, value: 'first' },
  { label: { term: 'Second option' }, value: 'second' },
  { label: { term: 'Extremely long text here, this should expand menu' }, value: 'third' },
];

const splitOptions = [
  { label: { term: 'evenly', desc: 'split total cost into even shares' }, value: 'evenly' },
  { label: { term: 'custom', desc: 'vary share amounts per contributor' }, value: 'custom' },
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
      options={simpleOptions}
      simple
      button
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
      options={simpleOptions}
      simple
      button
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
      options={simpleOptions}
      simple
      button
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
      options={simpleOptions}
      simple
      button
      disabled
    />
  ))
  .add('simple-picker/big', () => (
    <div className="w-25">
      <FieldStateProvider
        component={Picker}
        name="picker"
        label="Label"
        hint="Select one awesome value"
        value={null}
        onChange={action('onChange')}
        options={simpleOptions}
        simple
        big
        button
      />
    </div>
  ));

storiesOf('Consumer/Desktop/Atomic Components/small-simple-picker', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('small-simple-picker/default', () => (
    <FieldStateProvider
      component={Picker}
      name="picker"
      label="Label"
      hint="Select one awesome value"
      value={null}
      onChange={action('onChange')}
      options={simpleOptions}
      simple
    />
  ))

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
      options={simpleOptions}
      button
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
      options={simpleOptions}
      button
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
      options={simpleOptions}
      button
      disabled
    />
  ));

storiesOf('Consumer/Desktop/Payment Settings/split-picker', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('split-picker/default', () => (
    <div className="w-25">
      <FieldStateProvider
        component={Picker}
        name="picker"
        label="Label"
        hint="Select one awesome value"
        value="evenly"
        onChange={action('onChange')}
        options={splitOptions}
        simple
        big
        button
      />
    </div>
  ));
