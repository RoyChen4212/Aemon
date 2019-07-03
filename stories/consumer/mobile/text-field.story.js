import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextField from '../../../components/consumer/mobile/text-field';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Form Fields/text-field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('text-field/default', () => (
    <FieldStateProvider
      component={TextField}
      name="field1"
      onChange={action('change')}
      value="You typed this"
      hint="with a hint"
      label="A text field"
      required
    />
  ))
  .add('text-field/error', () => (
    <FieldStateProvider
      component={TextField}
      name="field1"
      onChange={action('change')}
      value="You typed this"
      hint="with a hint"
      label="A text field"
      error="this is an error"
      required
    />
  ));
