import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory } from '../../util/decorators';

import Icons from '../../../components/consumer/global/icons';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Global/Icons/Small/Email & Messaging', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('envelope-closed-small', () => <Icons className="pbg-icon-envelope-closed-small" />)
  .add('speech-bubble-small', () => <Icons className="pbg-icon-speech-bubble-small" />);

storiesOf('Consumer/Global/Icons/Small/Editing', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('edit-small', () => <Icons className="pbg-icon-edit-small" />)
  .add('org-controls-small-gray', () => <Icons className="pbg-icon-org-controls-small-gray" />)
  .add('org-controls-small-blue', () => <Icons className="pbg-icon-org-controls-small-blue" />)
  .add('cog-small-gray', () => <Icons className="pbg-icon-cog-small-gray" />)
  .add('cog-small-blue', () => <Icons className="pbg-icon-cog-small-blue" />);

storiesOf('Consumer/Global/Icons/Small/Group Invites', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('envelope-open-small-gray', () => <Icons className="pbg-icon-envelope-open-small-gray" />)
  .add('envelope-open-small-blue', () => <Icons className="pbg-icon-envelope-open-small-blue" />);

storiesOf('Consumer/Global/Icons/Small/Group Creation', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('rocket-small', () => <Icons className="pbg-icon-rocket-small" />);

storiesOf('Consumer/Global/Icons/Small/Users', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('add-user-small-blue', () => <Icons className="pbg-icon-add-user-small-blue" />)
  .add('add-user-small-gray', () => <Icons className="pbg-icon-add-user-small-gray" />)
  .add('org-identifier-small', () => <Icons className="pbg-icon-org-identifier-small" />)
  .add('user-contribution-small', () => <Icons className="pbg-icon-user-contribution-small" />)
  .add('user-small', () => <Icons className="pbg-icon-user-small" />)
  .add('users-small', () => <Icons className="pbg-icon-users-small" />);

storiesOf('Consumer/Global/Icons/Small/Payment', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('credit-card-small', () => <Icons className="pbg-icon-credit-card-small" />)
  .add('lock-small', () => <Icons className="pbg-icon-lock-small" />)
  .add('unlock-small', () => <Icons className="pbg-icon-unlock-small" />)
  .add('price-tag-small', () => <Icons className="pbg-icon-price-tag-small" />)
  .add('credit-card-error-small', () => <Icons className="pbg-icon-credit-card-error-small" />)
  .add('credit-card-pending-small', () => <Icons className="pbg-icon-credit-card-pending-small" />)
  .add('transaction-small', () => <Icons className="pbg-icon-transaction-small" />)
  .add('credit-card-add-small', () => <Icons className="pbg-icon-credit-card-add-small" />)
  .add('credit-card-subtract-small', () => <Icons className="pbg-icon-credit-card-subtract-small" />);
