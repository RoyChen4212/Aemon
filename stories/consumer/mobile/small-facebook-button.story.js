import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SmallFacebookButton } from '../../../components/consumer/mobile/button';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Atomic Components/Small Facebook Button', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Enabled/No Hint', () => (
    <SmallFacebookButton onClick={action('clicked')}>Small Facebook Button</SmallFacebookButton>
  ))
  .add('Enabled/With Hint', () => (
    <SmallFacebookButton hint="With Hint" onClick={action('clicked')}>Small Facebook Button</SmallFacebookButton>
  ))
  .add('Disabled', () => (
    <SmallFacebookButton disabled onClick={action('clicked')}>Small Facebook Button Disabled</SmallFacebookButton>
  ));
