import React from 'react';
import { values } from 'lodash';
import { storiesOf } from '@storybook/react';
import { iconTypes } from '../../../components/consumer/shared/icon-types';
import Status from '../../../components/consumer/desktop/status';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

// Excluding non gray icons
const excludedIcons = [
  iconTypes.CREDIT_CARD_ERROR,
  iconTypes.BACK_ARROW,
  iconTypes.DOTS,
  iconTypes.EXTERNAL_LINK,
  iconTypes.LARGE_ARROW,
  iconTypes.ADD_USER,
  iconTypes.ORG_IDENTIFIER,
  iconTypes.HINT_ERROR,
  iconTypes.LINK_QUESTION_MARK,
  iconTypes.AMEX,
  iconTypes.CARD_PLACEHOLDER,
  iconTypes.DINERS_CLUB,
  iconTypes.DISCOVER,
  iconTypes.MASTERCARD,
  iconTypes.VISA,
  iconTypes.GMAIL,
  iconTypes.YAHOO,
  iconTypes.OUTLOOK,
  iconTypes.EMAIL_ALERT,
  iconTypes.INVITE,
  iconTypes.USERS_COMPLETE,
  iconTypes.USER_REMOVE,
  iconTypes.USERS_MISSING,
  iconTypes.USER_ADD_2X,
  iconTypes.CREDIT_CARDS_SUCCESS,
  iconTypes.CREDIT_CARDS_ERROR,
  iconTypes.CREDIT_CARDS_PENDING,
  iconTypes.LOCK_PENDING,
  iconTypes.CART_SUCCESS,
  iconTypes.CART_PENDING,
];

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
    values(iconTypes)
      .filter(iconType => excludedIcons.indexOf(iconType) === -1)
      .map(iconType => {
        return (
          <p key={iconType}>
            <Status label={iconType} iconType={iconType} />
          </p>
        );
      })
  );
