import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TextField } from '../../../components/consumer/mobile/form-fields';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Form Fields/Text Field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Valid', () => (
    <TextField
      name="field1"
      label="A text field"
    />
  ))
  .add('Valid/With value', () => (
    <TextField
      name="field1"
      value="You typed this"
      label="A text field"
    />
  ))
  .add('Valid/With Hint', () => (
    <TextField
      name="field2"
      label="A text field"
      hint="with a hint"
    />
  ))
  .add('Valid/Required', () => (
    <TextField
      name="field2"
      label="A required text field"
      hint="with a hint"
      required
    />
  ))
  .add('Invalid', () => (
    <TextField
      name="field3"
      label="A text field"
      value="What you typed is wrong"
      error="this field has error"
    />
  ));
