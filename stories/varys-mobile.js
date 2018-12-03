import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from '../components/varys-mobile/label';

storiesOf('Label', module)
  .add('with text', () => <Label text="I am a label" />)