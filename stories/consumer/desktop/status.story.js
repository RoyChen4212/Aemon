import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithFigma } from 'storybook-addon-figma';
import Status from '../../../components/consumer/desktop/status';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=1578%3A873';

storiesOf('Consumer/Desktop/Info/status', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('status/default', () => (
    <Status label="Inventory" value="Reservation status" hint="Small hint" iconType="lock" />
  ))
  .add('status/with-tooltip', () => (
    <Status
      label="Inventory"
      value="Reservation status"
      hint="Small hint"
      tooltip="This is the tooltip content."
      iconType="lock"
    />
  ));
