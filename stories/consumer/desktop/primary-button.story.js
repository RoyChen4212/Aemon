import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { PrimaryButton } from '../../../components/consumer/desktop/button';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=0%3A16729';

storiesOf('Consumer/Desktop/Atomic Components/Primary Button', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Enabled', () => (
    <PrimaryButton onClick={action('clicked')}>Primary Button</PrimaryButton>
  ))
  .add('Disabled', () => (
    <PrimaryButton disabled onClick={action('clicked')}>Primary Button</PrimaryButton>
  ));