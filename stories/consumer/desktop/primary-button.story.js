import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PrimaryButton, FacebookButton } from '../../../components/consumer/desktop/button';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Atomic Components/Buttons', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('cta-primary/normal', () => (
    <React.Fragment>
      <PrimaryButton onClick={action('clicked')}>Primary Button</PrimaryButton>
      <p>Mouse over for hover, click for pressed</p>
    </React.Fragment>
  ))
  .add('cta-primary/submitting', () => (
    <PrimaryButton submitting onClick={action('clicked')}>
      Primary Button
    </PrimaryButton>
  ))
  .add('cta-primary/disabled', () => (
    <PrimaryButton disabled onClick={action('clicked')}>
      Primary Button
    </PrimaryButton>
  ))
  .add('facebook-button/default', () => (
    <FacebookButton onClick={action('clicked')}>Continue with Facebook</FacebookButton>
  ));
