import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory } from '../../util/decorators';
import ShareLink from '../../../components/consumer/mobile/share-link';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Onboarding/invite-contributors-link', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('share-link', () => <ShareLink href="http://paybygroup.com/dshjahghfd" />);
