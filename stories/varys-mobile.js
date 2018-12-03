import React from 'react';
import { storiesOf } from '@storybook/react';
import Label, { types } from '../components/varys-mobile/label';

storiesOf('Label', module)
  .add('normal label', () => <Label>I am a label</Label>)
  .add('strong label', () => <Label type={types.STRONG}>I am a strong label</Label>)
  .add('secondary label', () => <Label type={types.SECONDARY}>I am a secondary label</Label>)
  .add('input label', () => <Label type={types.INPUT}>I am an input label</Label>)
  .add('clickable label', () => (
    <Label type={types.CLICKABLE} onClick={() => alert('I was clicked')}>Click me</Label>
  ))