import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { H1, H2, H3 } from '../../../components/consumer/mobile/heading';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=1%3A5577';
const sampleText = 'Pay By Group Rules';

storiesOf('Consumer/Mobile/Atomic Components/Heading', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('H1', () => <H1>{sampleText}</H1>)
  .add('H2', () => <H2>{sampleText}</H2>)
  .add('H3', () => <H3>{sampleText}</H3>);
