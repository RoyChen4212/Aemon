import React from 'react';
import { storiesOf } from '@storybook/react';
import Divider from '../../../components/consumer/mobile/divider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Atomic Components/divider', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('divider', () => <Divider />)