import React from 'react';
import { storiesOf } from '@storybook/react';
import ActivityThumbnail from '../../../components/consumer/mobile/activity-thumbnail';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Atomic Components/activity-thumbnail', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('activity-thumbnail/purchase-updated', () => <ActivityThumbnail type="purchase_updated" />)
  .add('activity-thumbnail/purchase-claimed', () => <ActivityThumbnail type="purchase_claimed" />)
  .add('activity-thumbnail/member-invited', () => <ActivityThumbnail type="member_invited" />)
  .add('activity-thumbnail/member-joined', () => <ActivityThumbnail type="member_joined" />)
  .add('activity-thumbnail/member-withdrew', () => <ActivityThumbnail type="member_withdrew" />)
  .add('activity-thumbnail/purchase-tipped', () => <ActivityThumbnail type="purchase_tipped" />)
  .add('activity-thumbnail/purchase-untipped', () => <ActivityThumbnail type="purchase_untipped" />)
  .add('activity-thumbnail/payment-authorized', () => <ActivityThumbnail type="payment_authorized" />)
  .add('activity-thumbnail/payment-captured', () => <ActivityThumbnail type="payment_captured" />)
  .add('activity-thumbnail/purchase-completed', () => <ActivityThumbnail type="purchase_completed" />)
  .add('activity-thumbnail/purchase-comment', () => (
    <ActivityThumbnail type="purchase_comment_created" src="http://via.placeholder.com/35" />
  ));
