import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Label, { types } from '../components/varys-mobile/label';
import { H1, H2, H3 } from '../components/varys-mobile/heading';

storiesOf('Label', module)
  .add('normal label', () => <Label>I am a label</Label>)
  .add('strong label', () => <Label type={types.STRONG}>I am a strong label</Label>)
  .add('secondary label', () => <Label type={types.SECONDARY}>I am a secondary label</Label>)
  .add('input label', () => <Label type={types.INPUT}>I am an input label</Label>)
  .add('clickable label', () => (
    <Label type={types.CLICKABLE} onClick={action('clicked')}>Click me</Label>
  ));

storiesOf('Heading', module)
  .add('Heading 1', () => <H1>Heading 1</H1>)
  .add('Heading 2', () => <H2>Heading 2</H2>)
  .add('Heading 3', () => <H3>Heading 3</H3>)