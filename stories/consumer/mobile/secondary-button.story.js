import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SecondaryButton } from '../../../components/consumer/mobile/button';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { withContainer, wrapStory } from '../../util/decorators';

storiesOf('Atomic Components/Secondary Button', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Enabled/No Hint', () => (
    <SecondaryButton onClick={action('clicked')}>Secondary Button</SecondaryButton>
  ))
  .add('Enabled/With Hint', () => (
    <SecondaryButton hint="With Hint" onClick={action('clicked')}>Secondary Button</SecondaryButton>
  ))
  .add('Disabled', () => (
    <SecondaryButton disabled onClick={action('clicked')}>Secondary Button Disabled</SecondaryButton>
  ));
