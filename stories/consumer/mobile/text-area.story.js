import React from 'react';
import { storiesOf } from '@storybook/react';

import TextArea from '../../../components/consumer/mobile/text-area';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Form Fields/text-area', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
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
