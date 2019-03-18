import React from 'react';
import { storiesOf } from '@storybook/react';
import AvtivityThumbnail from '../../../components/consumer/desktop/activity-thumbnail';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';
import ActivityThumbnail from '../../../components/consumer/desktop/activity-thumbnail';

storiesOf('Consumer/Desktop/Atomic Components/ActivityThumbnail', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Purchase Updated', () => (
    <ActivityThumbnail type="purchase_updated" />
  ))
  .add('Purchase Claimed', () => (
    <ActivityThumbnail type="purchase_claimed" />
  ))
  .add('Member Invited', () => (
    <ActivityThumbnail type="member_invited" />
  ))
  .add('Member Joined', () => (
    <ActivityThumbnail type="member_joined" />
  ))
  .add('Member Withdrew', () => (
    <ActivityThumbnail type="member_withdrew" />
  ))
  .add('Purchase Tipped', () => (
    <ActivityThumbnail type="purchase_tipped" />
  ))
  .add('Purchase Untipped', () => (
    <ActivityThumbnail type="purchase_untipped" />
  ))
  .add('Payment Authorized (Deposit)', () => (
    <ActivityThumbnail type="payment_authorized_deposit" />
  ))
  .add('Payment Authorized (Payment)', () => (
    <ActivityThumbnail type="payment_authorized_payment" />
  ))
  .add('Payment Authorized (Purchase)', () => (
    <ActivityThumbnail type="payment_authorized_purchase" />
  ))
  .add('Payment Captured', () => (
    <ActivityThumbnail type="payment_captured" />
  ))
  .add('Purchase Completed', () => (
    <ActivityThumbnail type="purchase_completed" />
  ))
  .add('Purchase Comment with src', () => (
    <ActivityThumbnail type="purchase_comment_created" src="http://via.placeholder.com/35" />
  ))
  .add('Purchase Comment with userId', () => (
    <ActivityThumbnail type="purchase_comment_created" userId="01234567-abcd-abcd-abcd-0123456789ab" />
  ))
  .add('Custom size', () => {
    return <ActivityThumbnail type="purchase_updated" size={15} />
  });