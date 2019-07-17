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
    <PrimaryButton hint="Hint" onClick={action('clicked')}>
      Primary
    </PrimaryButton>
  ))
  .add('primary-button/submitting', () => (
    <PrimaryButton submitting hint="Hint" onClick={action('clicked')}>
      Primary
    </PrimaryButton>
  ))
  .add('primary-button/disabled', () => (
    <PrimaryButton disabled hint="Hint" onClick={action('clicked')}>
      Primary
    </PrimaryButton>
  ));
