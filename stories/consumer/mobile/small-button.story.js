import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SmallButton } from '../../../components/consumer/mobile/button';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Atomic Components/Small Button', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Enabled/No Hint', () => (
    <SmallButton onClick={action('clicked')}>Small Button</SmallButton>
  ))
  .add('Enabled/With Hint', () => (
    <SmallButton hint="With Hint" onClick={action('clicked')}>Small Button</SmallButton>
  ))
  .add('Disabled', () => (
    <SmallButton disabled onClick={action('clicked')}>Small Button Disabled</SmallButton>
  ));
