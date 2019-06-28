import React from 'react';
import { storiesOf } from '@storybook/react';
import Status from '../../../components/consumer/desktop/status';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Info/status', module)
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
