import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { SecondaryButton } from '../../../components/consumer/mobile/button';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { withContainer, wrapStory } from '../../util/decorators';

const figmaUrl =
  'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=2%3A1';
storiesOf('Consumer/Mobile/Atomic Components/Secondary Button', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Enabled/No Hint', () => (
    <SecondaryButton onClick={action('clicked')}>
      Secondary Button
    </SecondaryButton>
  ))
  .add('Enabled/With Hint', () => (
    <SecondaryButton hint="With Hint" onClick={action('clicked')}>
      Secondary Button
    </SecondaryButton>
  ))
  .add('Disabled', () => (
    <SecondaryButton disabled onClick={action('clicked')}>
      Secondary Button Disabled
    </SecondaryButton>
  ));
