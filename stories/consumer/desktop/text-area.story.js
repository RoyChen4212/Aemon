import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import TextArea from '../../../components/consumer/desktop/text-area';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=86%3A0';

storiesOf('Consumer/Desktop/Atomic Components/TextArea', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('textarea/placeholder', () => (
    <FieldStateProvider
      component={TextArea}
      name="text1"
      label="Type some large text"
      value=""
      hint="a poem maybe?"
      simple
    />
  ))
  .add('textarea/default (focus for active)', () => (
    <FieldStateProvider
      component={TextArea}
      name="text2"
      value="this is user input"
      onChange={action('change')}
      simple
    />
  ))
  .add('textarea/error', () => (
    <FieldStateProvider
      component={TextArea}
      name="text4"
      label="Type some large text"
      value="this is erroneus input"
      error="this field has error"
      simple
    />
  ))
  .add('textarea/disabled', () => (
    <FieldStateProvider
      component={TextArea}
      name="text4"
      label="Type some large text"
      value="this is erroneus input"
      simple
      disabled
    />
  ));

storiesOf('Consumer/Desktop/Form Fields/TextArea', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
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