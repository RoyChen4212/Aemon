import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { LinkButton } from '../../../components/consumer/mobile/button';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=2%3A1';
storiesOf('Consumer/Mobile/Atomic Components/Link Button', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Enabled/No Hint', () => <LinkButton onClick={action('clicked')}>Link Button</LinkButton>)
  .add('Enabled/With Hint', () => (
    <LinkButton hint="With Hint" onClick={action('clicked')}>
      Link Button
    </LinkButton>
  ))
  .add('Disabled', () => (
    <LinkButton disabled onClick={action('clicked')}>
      Link Button Disabled
    </LinkButton>
  ));
