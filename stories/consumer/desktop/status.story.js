import React from 'react';
import { values } from 'lodash';
import { storiesOf } from '@storybook/react';
import { iconTypes } from '../../../components/consumer/shared/icon-types';
import Status from '../../../components/consumer/desktop/status';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Info/status', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('status/default', () => (
    <Status label="Inventory" value="Reservation status" hint="Small hint" iconType={iconTypes.LOCK} />
  ))
  .add('status/with-tooltip', () => (
    <Status
      label="Inventory"
      value="Reservation status"
      hint="Small hint"
      tooltip="This is the tooltip content."
      iconType={iconTypes.CREDIT_CARD}
    />
  ))
  .add('status/available-icons', () =>
    values(iconTypes).map(iconType => (
      <p key={iconType}>
        <Status label={iconType} iconType={iconType} />
      </p>
    ))
  );
