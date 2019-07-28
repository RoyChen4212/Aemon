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
  .add('envelope-closed-small', () => <Icons className="pbg-icon-envelope-closed-small" />)
  .add('speech-bubble-small', () => <Icons className="pbg-icon-speech-bubble-small" />);

storiesOf('Consumer/Global/Icons/Small/Editing', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('edit-small', () => <Icons className="pbg-icon-edit-small" />)
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
  .add('rocket-small', () => <Icons className="pbg-icon-rocket-small" />);

storiesOf('Consumer/Global/Icons/Small/Users', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('add-user-small-blue', () => <Icons className="pbg-icon-add-user-small-blue" />)
  .add('add-user-small-gray', () => <Icons className="pbg-icon-add-user-small-gray" />)
  .add('org-identifier-small', () => <Icons className="pbg-icon-org-identifier-small" />)
  .add('user-contribution-small', () => <Icons className="pbg-icon-user-contribution-small" />)
  .add('user-small', () => <Icons className="pbg-icon-user-small" />)
  .add('users-small', () => <Icons className="pbg-icon-users-small" />);

storiesOf('Consumer/Global/Icons/Small/Payment', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('credit-card-small', () => <Icons className="pbg-icon-credit-card-small" />)
  .add('lock-small', () => <Icons className="pbg-icon-lock-small" />)
  .add('unlock-small', () => <Icons className="pbg-icon-unlock-small" />)
  .add('price-tag-small', () => <Icons className="pbg-icon-price-tag-small" />)
  .add('credit-card-error-small', () => <Icons className="pbg-icon-credit-card-error-small" />)
  .add('credit-card-pending-small', () => <Icons className="pbg-icon-credit-card-pending-small" />)
  .add('transaction-small', () => <Icons className="pbg-icon-transaction-small" />)
  .add('credit-card-add-small', () => <Icons className="pbg-icon-credit-card-add-small" />)
  .add('credit-card-subtract-small', () => <Icons className="pbg-icon-credit-card-subtract-small" />);

storiesOf('Consumer/Global/Icons/Small/Purchase', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('cart-small', () => <Icons className="pbg-icon-cart-small" />);

storiesOf('Consumer/Global/Icons/Small/Date & Time', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('calendar-small', () => <Icons className="pbg-icon-calendar-small" />)
  .add('calendar-start-small', () => <Icons className="pbg-icon-calendar-start-small" />)
  .add('calendar-end-small', () => <Icons className="pbg-icon-calendar-end-small" />)
  .add('clock-small', () => <Icons className="pbg-icon-clock-small" />)
  .add('hour-glass-small', () => <Icons className="pbg-icon-hour-glass-small" />);

storiesOf('Consumer/Global/Icons/Small/Information', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('bell-small-gray', () => <Icons className="pbg-icon-bell-small-gray" />)
  .add('bell-small-yellow', () => <Icons className="pbg-icon-bell-small-yellow" />)
  .add('check-mark-circle-small-gray', () => <Icons className="pbg-icon-check-mark-circle-small-gray" />)
  .add('check-mark-circle-small-green', () => <Icons className="pbg-icon-check-mark-circle-small-green" />)
  .add('globe-small', () => <Icons className="pbg-icon-globe-small" />)
  .add('hint-error-small', () => <Icons className="pbg-icon-hint-error-small" />)
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
  .add('external-link-small', () => <Icons className="pbg-icon-external-link-small" />)
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
