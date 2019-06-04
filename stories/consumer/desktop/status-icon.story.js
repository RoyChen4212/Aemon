import React from 'react';
import { storiesOf } from '@storybook/react';
import StatusIcon from '../../../components/consumer/desktop/status-icon';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Payment Settings/status-icon', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('status-icon/default', () => <StatusIcon />)
