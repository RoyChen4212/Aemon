import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { LinkButton } from '../../../components/consumer/mobile/button';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Atomic Components/Link Button', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Enabled/No Hint', () => (
    <LinkButton onClick={action('clicked')}>Link Button</LinkButton>
  ))
  .add('Enabled/With Hint', () => (
    <LinkButton hint="With Hint" onClick={action('clicked')}>Link Button</LinkButton>
  ))
  .add('Disabled', () => (
    <LinkButton disabled onClick={action('clicked')}>Link Button Disabled</LinkButton>
  ));
