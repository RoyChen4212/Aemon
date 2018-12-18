import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FacebookButton } from '../../../components/consumer/mobile/button';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Atomic Components/Facebook Button', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Enabled/No Hint', () => (
    <FacebookButton onClick={action('clicked')}>Facebook Button</FacebookButton>
  ))
  .add('Enabled/With Hint', () => (
    <FacebookButton hint="With Hint" onClick={action('clicked')}>Facebook Button</FacebookButton>
  ))
  .add('Disabled', () => (
    <FacebookButton disabled onClick={action('clicked')}>Facebook Button Disabled</FacebookButton>
  ));
