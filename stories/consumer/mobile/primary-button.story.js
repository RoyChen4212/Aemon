import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { PrimaryButton } from '../../../components/consumer/mobile/button';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl =
  'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=2%3A1';
storiesOf('Consumer/Mobile/Atomic Components/Primary Button', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Enabled/No Hint', () => (
    <PrimaryButton onClick={action('clicked')}>Primary Button</PrimaryButton>
  ))
  .add('Enabled/With Hint', () => (
    <PrimaryButton hint="With Hint" onClick={action('clicked')}>
      Primary Button
    </PrimaryButton>
  ))
  .add('Disabled', () => (
    <PrimaryButton disabled onClick={action('clicked')}>
      Primary Button Disabled
    </PrimaryButton>
  ));
