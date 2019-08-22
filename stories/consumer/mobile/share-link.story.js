import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory, withMobileSizing } from '../../util/decorators';
import ShareLink from '../../../components/consumer/mobile/share-link';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Onboarding/invite-contributors-link', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('share-link/default', () => <ShareLink label="http://paybygroup.com/dshjahghfd" />);

storiesOf('Consumer/Mobile/Onboarding/invite-contributors-link', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withMobileSizing)
  .add('share-link/long-link', () => (
    <ShareLink label="http://paybygroup.com/dshjahghfdadsasdsaasdasadaadsadsadasdasdasdasdasdasdasda" />
  ));
