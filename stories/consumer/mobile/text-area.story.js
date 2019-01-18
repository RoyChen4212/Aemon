import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { TextArea } from '../../../components/consumer/mobile/form-fields';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Form Fields/TextArea', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Valid', () => (
    <FieldStateProvider
      component={TextArea}
      name="text1"
      label="Type some large text"
      value=""
      hint="a poem maybe?"
    />
  ))
  .add('Valid/With Value', () => (
    <FieldStateProvider
      component={TextArea}
      name="text2"
      label="Type some large text"
      hint="a poem maybe?"
      value="Lorem ipsum dolor sit amet"
      onChange={action('change')}
    />
  ))
  .add('Valid/Required', () => (
    <FieldStateProvider
      component={TextArea}
      name="text3"
      label="Type some large text"
      value=""
      hint="a poem maybe?"
      required
    />
  ))
  .add('Invalid', () => (
    <FieldStateProvider
      component={TextArea}
      name="text4"
      label="Type some large text"
      value=""
      error="this field has error"
    />
  ));
