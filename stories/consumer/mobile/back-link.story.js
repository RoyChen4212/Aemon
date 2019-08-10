import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory } from '../../util/decorators';
import BackLink from '../../../components/consumer/mobile/back-link';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Info', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('back-link', () => <BackLink label="Back" href="http://www.google.com" />);
