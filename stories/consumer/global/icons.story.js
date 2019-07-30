import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory, withGrey20Container } from '../../util/decorators';

import Icons from '../../../components/consumer/global/icons';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Global/Icons/Small/Email & Messaging', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('envelope-closed-small-gray', () => <Icons className="pbg-icon-envelope-closed-small-gray" />)
  .add('speech-bubble-small-gray', () => <Icons className="pbg-icon-speech-bubble-small-gray" />);

storiesOf('Consumer/Global/Icons/Small/Editing', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('edit-small-gray', () => <Icons className="pbg-icon-edit-small-gray" />)
  .add('org-controls-small-gray', () => <Icons className="pbg-icon-org-controls-small-gray" />)
  .add('org-controls-small-blue', () => <Icons className="pbg-icon-org-controls-small-blue" />)
  .add('cog-small-gray', () => <Icons className="pbg-icon-cog-small-gray" />)
  .add('cog-small-blue', () => <Icons className="pbg-icon-cog-small-blue" />);

storiesOf('Consumer/Global/Icons/Small/Group Invites', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('envelope-open-small-gray', () => <Icons className="pbg-icon-envelope-open-small-gray" />)
  .add('envelope-open-small-blue', () => <Icons className="pbg-icon-envelope-open-small-blue" />);

storiesOf('Consumer/Global/Icons/Small/Group Creation', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('rocket-small-gray', () => <Icons className="pbg-icon-rocket-small-gray" />);

storiesOf('Consumer/Global/Icons/Small/Users', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('add-user-small-blue', () => <Icons className="pbg-icon-add-user-small-blue" />)
  .add('add-user-small-gray', () => <Icons className="pbg-icon-add-user-small-gray" />)
  .add('org-identifier-small-green', () => <Icons className="pbg-icon-org-identifier-small-green" />)
  .add('user-contribution-small-gray', () => <Icons className="pbg-icon-user-contribution-small-gray" />)
  .add('user-small-gray', () => <Icons className="pbg-icon-user-small-gray" />)
  .add('users-small-gray', () => <Icons className="pbg-icon-users-small-gray" />);

storiesOf('Consumer/Global/Icons/Small/Payment', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('credit-card-small-gray', () => <Icons className="pbg-icon-credit-card-small-gray" />)
  .add('lock-small-gray', () => <Icons className="pbg-icon-lock-small-gray" />)
  .add('unlock-small-gray', () => <Icons className="pbg-icon-unlock-small-gray" />)
  .add('price-tag-small-gray', () => <Icons className="pbg-icon-price-tag-small-gray" />)
  .add('credit-card-error-small-red', () => <Icons className="pbg-icon-credit-card-error-small-red" />)
  .add('credit-card-pending-small-gray', () => <Icons className="pbg-icon-credit-card-pending-small-gray" />)
  .add('transaction-small-gray', () => <Icons className="pbg-icon-transaction-small-gray" />)
  .add('credit-card-add-small-gray', () => <Icons className="pbg-icon-credit-card-add-small-gray" />)
  .add('credit-card-subtract-small-gray', () => <Icons className="pbg-icon-credit-card-subtract-small-gray" />);

storiesOf('Consumer/Global/Icons/Small/Purchase', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('cart-small-gray', () => <Icons className="pbg-icon-cart-small-gray" />);

storiesOf('Consumer/Global/Icons/Small/Date & Time', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('calendar-small-gray', () => <Icons className="pbg-icon-calendar-small-gray" />)
  .add('calendar-start-small-gray', () => <Icons className="pbg-icon-calendar-start-small-gray" />)
  .add('calendar-end-small-gray', () => <Icons className="pbg-icon-calendar-end-small-gray" />)
  .add('clock-small-gray', () => <Icons className="pbg-icon-clock-small-gray" />)
  .add('hour-glass-small-gray', () => <Icons className="pbg-icon-hour-glass-small-gray" />);

storiesOf('Consumer/Global/Icons/Small/Information', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('bell-small-gray', () => <Icons className="pbg-icon-bell-small-gray" />)
  .add('bell-small-yellow', () => <Icons className="pbg-icon-bell-small-yellow" />)
  .add('check-mark-circle-small-gray', () => <Icons className="pbg-icon-check-mark-circle-small-gray" />)
  .add('check-mark-circle-small-green', () => <Icons className="pbg-icon-check-mark-circle-small-green" />)
  .add('globe-small-gray', () => <Icons className="pbg-icon-globe-small-gray" />)
  .add('hint-error-small-red', () => <Icons className="pbg-icon-hint-error-small-red" />)
  .add('info-small-blue', () => <Icons className="pbg-icon-info-small-blue" />)
  .add('info-small-gray', () => <Icons className="pbg-icon-info-small-gray" />)
  .add('info-small-white', () => <Icons className="pbg-icon-info-small-white" />)
  .add('link-question-mark-blue', () => <Icons className="pbg-icon-link-question-mark-blue" />)
  .add('link-question-mark-gray', () => <Icons className="pbg-icon-link-question-mark-gray" />)
  .add('link-small-gray', () => <Icons className="pbg-icon-link-small-gray" />)
  .add('question-mark-small-blue', () => <Icons className="pbg-icon-question-mark-small-blue" />)
  .add('question-mark-small-gray', () => <Icons className="pbg-icon-question-mark-small-gray" />)
  .add('warning-small-gray', () => <Icons className="pbg-icon-warning-small-gray" />)
  .add('warning-small-red', () => <Icons className="pbg-icon-warning-small-red" />);

storiesOf('Consumer/Global/Icons/Small/UI Specific', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('arrow-down-small-blue', () => <Icons className="pbg-icon-arrow-down-small-blue" />)
  .add('arrow-down-small-gray', () => <Icons className="pbg-icon-arrow-down-small-gray" />)
  .add('arrow-left-small-blue', () => <Icons className="pbg-icon-arrow-left-small-blue" />)
  .add('arrow-left-small-gray', () => <Icons className="pbg-icon-arrow-left-small-gray" />)
  .add('arrow-right-small-blue', () => <Icons className="pbg-icon-arrow-right-small-blue" />)
  .add('arrow-right-small-gray', () => <Icons className="pbg-icon-arrow-right-small-gray" />)
  .add('arrow-up-small-blue', () => <Icons className="pbg-icon-arrow-up-small-blue" />)
  .add('arrow-up-small-gray', () => <Icons className="pbg-icon-arrow-up-small-gray" />)
  .add('back-arrow-gray', () => <Icons className="pbg-icon-back-arrow-gray" />)
  .add('back-arrow-small-blue', () => <Icons className="pbg-icon-back-arrow-small-blue" />)
  .add('check-mark-small-gray', () => <Icons className="pbg-icon-check-mark-small-gray" />)
  .add('check-mark-small-white', () => <Icons className="pbg-icon-check-mark-small-white" />)
  .add('cross-small-blue', () => <Icons className="pbg-icon-cross-small-blue" />)
  .add('cross-small-gray', () => <Icons className="pbg-icon-cross-small-gray" />)
  .add('cross-small-white', () => <Icons className="pbg-icon-cross-small-white" />)
  .add('dots-small-blue', () => <Icons className="pbg-icon-dots-small-blue" />)
  .add('external-link-small-blue', () => <Icons className="pbg-icon-external-link-small-blue" />)
  .add('large-arrow-small-blue', () => <Icons className="pbg-icon-large-arrow-small-blue" />)
  .add('menu-small-blue', () => <Icons className="pbg-icon-menu-small-blue" />)
  .add('menu-small-gray', () => <Icons className="pbg-icon-menu-small-gray" />)
  .add('minus-small-blue', () => <Icons className="pbg-icon-minus-small-blue" />)
  .add('minus-small-gray', () => <Icons className="pbg-icon-minus-small-gray" />)
  .add('plus-small-blue', () => <Icons className="pbg-icon-plus-small-blue" />)
  .add('plus-small-gray', () => <Icons className="pbg-icon-plus-small-gray" />);

storiesOf('Consumer/Global/Icons/Small/Credit Cards', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('amex-big', () => <Icons className="pbg-icon-amex-big" />)
  .add('amex-small', () => <Icons className="pbg-icon-amex-small" />)
  .add('card-placeholder-big', () => <Icons className="pbg-icon-card-placeholder-big" />)
  .add('card-placeholder-small', () => <Icons className="pbg-icon-card-placeholder-small" />)
  .add('diners-club-big', () => <Icons className="pbg-icon-diners-club-big" />)
  .add('diners-club-small', () => <Icons className="pbg-icon-diners-club-small" />)
  .add('discover-big', () => <Icons className="pbg-icon-discover-big" />)
  .add('discover-small', () => <Icons className="pbg-icon-discover-small" />)
  .add('mastercard-big', () => <Icons className="pbg-icon-mastercard-big" />)
  .add('mastercard-small', () => <Icons className="pbg-icon-mastercard-small" />)
  .add('visa-big', () => <Icons className="pbg-icon-visa-big" />)
  .add('visa-small', () => <Icons className="pbg-icon-visa-small" />);

storiesOf('Consumer/Global/Icons/Small/Contact Import Methods', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('gmail', () => <Icons className="pbg-icon-gmail" />)
  .add('outlook', () => <Icons className="pbg-icon-outlook" />)
  .add('yahoo', () => <Icons className="pbg-icon-yahoo" />);

storiesOf('Consumer/Global/Icons/Big/Email & Messaging', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('email-alert-big-blue', () => <Icons className="pbg-icon-email-alert-big-blue" />);

storiesOf('Consumer/Global/Icons/Big/Editing', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('edit-big-blue', () => <Icons className="pbg-icon-edit-big-blue" />);

storiesOf('Consumer/Global/Icons/Big/Group Invites', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('invite-big-blue', () => <Icons className="pbg-icon-invite-big-blue" />);

storiesOf('Consumer/Global/Icons/Big/Group Creation', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('rocket-big-blue', () => <Icons className="pbg-icon-rocket-big-blue" />);

storiesOf('Consumer/Global/Icons/Big/Users', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('users-complete-big-green', () => <Icons className="pbg-icon-users-complete-big-green" />)
  .add('user-remove-big-red', () => <Icons className="pbg-icon-user-remove-big-red" />)
  .add('users-missing-big-red', () => <Icons className="pbg-icon-users-missing-big-red" />)
  .add('user-add-2x-green', () => <Icons className="pbg-icon-user-add-2x-green" />);

storiesOf('Consumer/Global/Icons/Big/Payment', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('credit-cards-success-big-green', () => <Icons className="pbg-icon-credit-cards-success-big-green" />)
  .add('credit-cards-error-big-red', () => <Icons className="pbg-icon-credit-cards-error-big-red" />)
  .add('credit-cards-pending-big-blue', () => <Icons className="pbg-icon-credit-cards-pending-big-blue" />)
  .add('lock-pending-big-blue', () => <Icons className="pbg-icon-lock-pending-big-blue" />);

storiesOf('Consumer/Global/Icons/Big/Purchase', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('cart-success-big-green', () => <Icons className="pbg-icon-cart-success-big-green" />)
  .add('cart-pending-big-blue', () => <Icons className="pbg-icon-cart-pending-big-blue" />);
