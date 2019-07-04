import React from 'react';
import { storiesOf } from '@storybook/react';
import Divider from '../../../components/consumer/desktop/divider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Atomic Components', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('divider', () => <Divider label='Label' hint='Helper text' />)
