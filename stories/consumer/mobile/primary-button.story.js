import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PrimaryButton } from '../../../components/consumer/mobile/button';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Atomic Components/Primary Button', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Enabled/No Hint', () => (
    <PrimaryButton onClick={action('clicked')}>Primary Button</PrimaryButton>
  ))
  .add('Enabled/With Hint', () => (
    <PrimaryButton hint="With Hint" onClick={action('clicked')}>Primary Button</PrimaryButton>
  ))
  .add('Disabled', () => (
    <PrimaryButton disabled onClick={action('clicked')}>Primary Button Disabled</PrimaryButton>
  ));
