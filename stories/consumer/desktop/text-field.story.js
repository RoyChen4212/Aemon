import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { TextField } from '../../../components/consumer/desktop/text-field';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Atomic Components/simple-text-input', module)
  .addDecorator(storyFn => (
    <WithFigma url="https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=161%3A7">
      {storyFn()}
    </WithFigma>
  ))
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('simple-text-input/default (focus for active)', () => (
    <FieldStateProvider component={TextField} simple name="field2" />
  ))
  .add('simple-text-input/placeholder', () => (
    <FieldStateProvider
      component={TextField}
      simple
      name="field2"
      label="Placeholder"
    />
  ))
  .add('simple-text-input/error', () => (
    <FieldStateProvider
      component={TextField}
      simple
      name="field2"
      label="A text field"
      value="What you typed is wrong"
      error="this is an error"
    />
  ))
  .add('simple-text-input/disabled', () => (
    <TextField
      simple
      disabled
      name="field3"
      label="A text field"
      value="Placeholder"
      hint="this is a hint"
    />
  ))
  .add('simple-text-input/facebook', () => (
    <FieldStateProvider
      component={TextField}
      simple
      name="field3"
      label="A text field"
      value="Placeholder"
      icon="https://assets.paybygroup.com/images/icons/facebook.svg"
    />
  ));

storiesOf('Consumer/Desktop/Form Fields/form-field', module)
  .addDecorator(storyFn => (
    <WithFigma url="https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=161%3A9">
      {storyFn()}
    </WithFigma>
  ))
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('form-field/default', () => (
    <FieldStateProvider
      component={TextField}
      name="field1"
      label="A text field"
      plaholder="Placeholder"
      hint="hint"
    />
  ))
  .add('form-field/error', () => (
    <FieldStateProvider
      component={TextField}
      name="field3"
      label="A text field"
      onChange={action('change')}
      value="What you typed is wrong"
      error="this is an error"
      hint="this is a hint"
    />
  ))
  .add('form-field/required', () => (
    <FieldStateProvider
      required
      component={TextField}
      name="field3"
      label="A text field"
      onChange={action('change')}
      value="What you typed is wrong"
      hint="this is a hint"
    />
  ));
