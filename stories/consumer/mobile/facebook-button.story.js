import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { FacebookButton } from '../../../components/consumer/mobile/button';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=2%3A1';
storiesOf('Consumer/Mobile/Atomic Components/Facebook Button', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Enabled/No Hint', () => (
    <FacebookButton onClick={action('clicked')}>Facebook Button</FacebookButton>
  ))
  .add('Enabled/With Hint', () => (
    <FacebookButton hint="With Hint" onClick={action('clicked')}>Facebook Button</FacebookButton>
  ))
  .add('Disabled', () => (
    <FacebookButton disabled onClick={action('clicked')}>Facebook Button Disabled</FacebookButton>
  ));
