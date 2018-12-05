import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Label, { types as labelTypes } from '../components/varys-mobile/label';
import { H1, H2, H3 } from '../components/varys-mobile/heading';
import Hint, { types as hintTypes } from '../components/varys-mobile/hint';
import {
  PrimaryButton, SecondaryButton, SmallButton, LinkButton
} from '../components/varys-mobile/button';

import './style.scss';

storiesOf('Varys/Mobile/Atomic Components', module)
  .add('Label', () => (
    <React.Fragment>
      <div className='story-wrapper'><Label>Normal Label</Label></div>
      <div className='story-wrapper'><Label type={labelTypes.STRONG}>I am a strong label</Label></div>
      <div className='story-wrapper'><Label type={labelTypes.SECONDARY}>I am a secondary label</Label></div>
      <div className='story-wrapper'><Label type={labelTypes.CLICKABLE} onClick={action('clicked')}>Click me</Label></div>
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
      <div className='story-wrapper'><Hint>Hint</Hint></div>
      <div className='story-wrapper'><Hint type={hintTypes.ERROR}>Error</Hint></div>
    </React.Fragment>
  ))
  .add('Button', () => (
    <div style={{ width: '25%', minWidth: '250px', }}>
      <div className='story-wrapper'>
        <PrimaryButton onClick={action('clicked')}>Primary Button</PrimaryButton>
      </div>
      <div className='story-wrapper'>
        <PrimaryButton disabled onClick={action('clicked')}>Primary Button Disabled</PrimaryButton>
      </div>
      <div className='story-wrapper'>
        <PrimaryButton hint="With Hint" onClick={action('clicked')}>Primary Button</PrimaryButton>
      </div>
      <div className='story-wrapper'>
        <SecondaryButton onClick={action('clicked')}>Secondary Button</SecondaryButton>
      </div>
      <div className='story-wrapper'>
        <SecondaryButton disabled onClick={action('clicked')}>Secondary Button Disabled</SecondaryButton>
      </div>
      <div className='story-wrapper'>
        <SecondaryButton hint="With Hint" onClick={action('clicked')}>Secondary Button</SecondaryButton>
      </div>
      <div className='story-wrapper'>
        <SmallButton onClick={action('clicked')}>Small Button</SmallButton>
      </div>
      <div className='story-wrapper'>
        <SmallButton disabled onClick={action('clicked')}>Small Button Disabled</SmallButton>
      </div>
      <div className='story-wrapper'>
        <SmallButton hint="With Hint" onClick={action('clicked')}>Small Button</SmallButton>
      </div>
      <div className='story-wrapper'>
        <LinkButton onClick={action('clicked')}>Link Button</LinkButton>
      </div>
      <div className='story-wrapper'>
        <LinkButton disabled onClick={action('clicked')}>Link Button Disabled</LinkButton>
      </div>
      <div className='story-wrapper'>
        <LinkButton hint="With Hint" onClick={action('clicked')}>Link Button</LinkButton>
      </div>
    </div>
  ));