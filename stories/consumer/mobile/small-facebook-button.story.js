import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SmallFacebookButton } from '../../../components/consumer/mobile/button';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Atomic Components/small-facebook-button', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('small-facebook-button/default', () => (
    <SmallFacebookButton onClick={action('clicked')}>Small Facebook Button</SmallFacebookButton>
  ))
  .add('small-facebook-button/disabled', () => (
    <SmallFacebookButton disabled onClick={action('clicked')}>
      Small Facebook Button Disabled
    </SmallFacebookButton>
  ));
