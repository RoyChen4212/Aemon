import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextArea from '../../../components/consumer/desktop/text-area';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Form Fields/text-area', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('text-area/simple/default', () => (
    <FieldStateProvider
      component={TextArea}
      name="text1"
      label="Type some large text"
      value=""
      hint="a poem maybe?"
      simple
    />
  ))
  .add('text-area/simple/error', () => (
    <FieldStateProvider
      component={TextArea}
      name="text4"
      label="Type some large text"
      value="this is erroneus input"
      error="this field has error"
      simple
    />
  ))
  .add('text-area/simple/disabled', () => (
    <FieldStateProvider
      component={TextArea}
      name="text4"
      label="Type some large text"
      value="this is erroneus input"
      simple
      disabled
    />
  ))
  .add('text-area/default', () => (
    <FieldStateProvider
      component={TextArea}
      name="text3"
      label="Type some large text"
      value=""
      hint="a poem maybe?"
      required
    />
  ))
  .add('text-area/error', () => (
    <FieldStateProvider
      component={TextArea}
      name="text4"
      label="Type some large text"
      value=""
      error="this field has error"
    />
  ));
