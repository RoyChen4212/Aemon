import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Label, { types as labelTypes } from '../components/varys-mobile/label';
import { H1, H2, H3 } from '../components/varys-mobile/heading';
import Hint, { types as hintTypes } from '../components/varys-mobile/hint';
import { PrimaryButton } from '../components/varys-mobile/button';

storiesOf('Varys/Mobile/Atomic Components', module)
  .add('Label', () => (
    <React.Fragment>
      <div><Label>Normal Label</Label></div>
      <div><Label type={labelTypes.STRONG}>I am a strong label</Label></div>
      <div><Label type={labelTypes.SECONDARY}>I am a secondary label</Label></div>
      <div><Label type={labelTypes.CLICKABLE} onClick={action('clicked')}>Click me</Label></div>
    </React.Fragment>
  ))
  .add('Heading 1', () => (
    <React.Fragment>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
    </React.Fragment>
  ))
  .add('Hint', () => (
    <React.Fragment>
      <div><Hint>Hint</Hint></div>
      <div><Hint type={hintTypes.ERROR}>Error</Hint></div>
    </React.Fragment>
  ))
  .add('Button', () => (
    <div style={{ width: '20%', minWidth: '200px', }}>
      <div><PrimaryButton>Primary Button</PrimaryButton></div>
      <div><PrimaryButton disabled>Primary Button</PrimaryButton></div>
      <div><PrimaryButton hint="Hint">Primary Button</PrimaryButton></div>
    </div>
  ));