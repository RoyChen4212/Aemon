import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { H1, H2, H3 } from '../../../components/consumer/mobile/heading';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const sampleText = 'Pay By Group Rules';
storiesOf('Consumer/Mobile/Atomic Components/Heading', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('H1', () => <H1>{sampleText}</H1>)
  .add('H2', () => <H2>{sampleText}</H2>)
  .add('H3', () => <H3>{sampleText}</H3>);
