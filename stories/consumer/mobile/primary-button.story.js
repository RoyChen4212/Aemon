import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PrimaryButton } from '../../../components/consumer/mobile/button';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Atomic Components/primary-button', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('primary-button/default', () => (
    <PrimaryButton onClick={action('clicked')}>
      Primary Button
    </PrimaryButton>
  ))
  .add('primary-button/disabled', () => (
    <PrimaryButton disabled onClick={action('clicked')}>
      Primary Button Disabled
    </PrimaryButton>
  ));
