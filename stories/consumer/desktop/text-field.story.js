import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { TextField } from '../../../components/consumer/desktop/text-field';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=161%3A7';
storiesOf('Consumer/Desktop/Form Fields/Text Field', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Full: Valid', () => (
    <FieldStateProvider
      component={TextField}
      name="field1"
      label="A text field"
    />
  ))
  .add('Full: Valid/With value', () => (
    <FieldStateProvider
      component={TextField}
      name="field1"
      onChange={action('change')}
      value="You typed this"
      label="A text field"
    />
  ))
  .add('Full: Valid/With Hint', () => (
    <TextField
      name="field2"
      label="A text field"
      hint="with a hint"
    />
  ))
  .add('Full: Valid/Required', () => (
    <TextField
      name="field2"
      label="A required text field"
      hint="with a hint"
      required
    />
  ))
  .add('Full: Invalid', () => (
    <FieldStateProvider
      component={TextField}
      name="field3"
      label="A text field"
      onChange={action('change')}
      value="What you typed is wrong"
      error="this is an error"
    />
  ))
  .add('Full: Disabled', () => (
    <FieldStateProvider
      disabled
      component={TextField}
      name="field3"
      label="A text field"
      onChange={action('change')}
      value="What you typed is wrong"
      hint="this is a hint"
    />
  ))
  .add('Simple: Defult', () => (
    <TextField
      simple
      name="field2"
    />
  ))
  .add('Simple: With placeholder', () => (
    <TextField
      simple
      name="field2"
      label="Placeholder text"
    />
  ))
  .add('Simple: Valid/With value', () => (
    <FieldStateProvider
      simple
      component={TextField}
      name="field1"
      onChange={action('change')}
      value="You typed this"
      label="A text field"
    />
  ))
  .add('Simple: Invalid', () => (
    <FieldStateProvider
      simple
      component={TextField}
      name="field3"
      label="A text field"
      onChange={action('change')}
      value="What you typed is wrong"
      error="this is an error"
    />
  ))
  .add('Simple: Disabled', () => (
    <FieldStateProvider
      simple
      disabled
      component={TextField}
      name="field3"
      label="A text field"
      onChange={action('change')}
      value="What you typed is wrong"
      hint="this is a hint"
    />
  ));
