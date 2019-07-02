import React from 'react';
import { storiesOf } from '@storybook/react';
import { H1, H2, H3 } from '../../../components/consumer/mobile/heading';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const sampleText = 'Pay By Group Rules';

storiesOf('Consumer/Mobile/Atomic Components/heading', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('h1', () => <H1>{sampleText}</H1>)
  .add('h2', () => <H2>{sampleText}</H2>)
  .add('h3', () => <H3>{sampleText}</H3>);
