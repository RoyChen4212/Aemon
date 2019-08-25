import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory } from '../../util/decorators';
import ShareLink from '../../../components/consumer/desktop/share-link';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Add Contributors', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('share-link/default', () => <ShareLink label="Follow Link" href="http://paybygroup.com/" />);
