import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FacebookButton } from '../../../components/consumer/mobile/button';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Atomic Components/facebook-button', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('facebook-button/default', () => (
    <FacebookButton hint="With Hint" onClick={action('clicked')}>
      Facebook Button
    </FacebookButton>
  ))
  .add('facebook-button/disabled', () => (
    <FacebookButton disabled onClick={action('clicked')}>
      Facebook Button Disabled
    </FacebookButton>
  ));
