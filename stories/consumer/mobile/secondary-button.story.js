import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SecondaryButton } from '../../../components/consumer/mobile/button';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { withContainer, wrapStory } from '../../util/decorators';

storiesOf('Consumer/Mobile/Atomic Components/secondary-button', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('secondary-button/default', () => (
    <SecondaryButton hint="Hint" onClick={action('clicked')}>
      Secondary
    </SecondaryButton>
  ))
  .add('secondary-button/disabled', () => (
    <SecondaryButton disabled onClick={action('clicked')} hint="Hint">
      Secondary
    </SecondaryButton>
  ));
