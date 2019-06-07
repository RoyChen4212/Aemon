import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import {
  PrimaryButton,
  FacebookButton,
} from '../../../components/consumer/desktop/button';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl =
  'https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=0%3A16729';

storiesOf('Consumer/Desktop/Atomic Components/Buttons', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('cta-primary/normal', () => (
    <React.Fragment>
      <PrimaryButton onClick={action('clicked')}>Primary Button</PrimaryButton>
      <p>Mouse over for hover, click for pressed</p>
    </React.Fragment>
  ))
  .add('cta-primary/submitting', () => (
    <PrimaryButton disabled onClick={action('clicked')}>
      Primary Button
    </PrimaryButton>
  ))
  .add('facebook-button/default', () => (
    <FacebookButton onClick={action('clicked')}>
      Continue with Facebook
    </FacebookButton>
  ));
