import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextField from '../../../components/consumer/desktop/text-field';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Form Fields/text-field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('text-field/simple/default', () => <FieldStateProvider component={TextField} simple name="field2" />)
  .add('text-field/simple/placeholder', () => (
    <FieldStateProvider component={TextField} simple name="field2" label="Placeholder" />
  ))
  .add('text-field/simple/error', () => (
    <FieldStateProvider
      component={TextField}
      simple
      name="field2"
      label="A text field"
      value="What you typed is wrong"
      error="this is an error"
    />
  ))
  .add('text-field/simple/disabled', () => (
    <TextField simple disabled name="field3" label="A text field" value="Placeholder" hint="this is a hint" />
  ))
  .add('text-field/simple/facebook', () => (
    <FieldStateProvider
      component={TextField}
      simple
      name="field3"
      label="A text field"
      value="Placeholder"
      icon="https://assets.paybygroup.com/images/icons/facebook.svg"
      onIconClick={action('onIconClick')}
    />
  ));

storiesOf('Consumer/Desktop/Form Fields/text-field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('text-field/default', () => (
    <FieldStateProvider component={TextField} name="field1" label="A text field" plaholder="Placeholder" hint="hint" />
  ))
  .add('text-field/error', () => (
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
  .add('text-field/required', () => (
    <FieldStateProvider
      required
      component={TextField}
      name="field3"
      label="A text field"
      onChange={action('change')}
      placeholder="What you typed is wrong"
      hint="this is a hint"
    />
  ))
  .add('text-field/facebook', () => (
    <FieldStateProvider
      component={TextField}
      name="field3"
      label="A text field"
      plaholder="Placeholder"
      hint="hint"
      icon="https://assets.paybygroup.com/images/icons/facebook.svg"
      onIconClick={action('onIconClick')}
    />
  ));
