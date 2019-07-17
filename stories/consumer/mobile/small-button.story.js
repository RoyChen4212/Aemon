import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SmallButton } from '../../../components/consumer/mobile/button';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Atomic Components/small-button', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('small-button/default', () => <SmallButton onClick={action('clicked')}>Small Button</SmallButton>)
  .add('small-button/icon', () => (
    <SmallButton iconType="cross" onClick={action('clicked')}>
      Small Button
    </SmallButton>
  ))
  .add('small-button/disabled', () => (
    <SmallButton disabled onClick={action('clicked')}>
      Small Button Disabled
    </SmallButton>
  ));
