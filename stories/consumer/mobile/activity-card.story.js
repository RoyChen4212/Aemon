import React from 'react';
import { storiesOf } from '@storybook/react';
import { UserCommentCard, GroupActivityCard } from '../../../components/consumer/mobile/activity-card';
import {
  MEMBER_WITHDREW,
  MEMBER_JOINED,
  PURCHASE_UPDATED,
} from '../../../components/consumer/mobile/activity-thumbnail';
import { withGreyContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';


storiesOf('Consumer/Mobile/activity-card', module)
  .addDecorator(wrapStory)
  .addDecorator(withGreyContainer)
  .add('activity-card/new-contributor', () => (
    <GroupActivityCard date={new Date()} title="New contributor" type={MEMBER_JOINED}>
      <p>Michelle Paez has joined the group</p>
    </GroupActivityCard>
  ))
  .add('activity-card/contributor-withdrew', () => (
    <GroupActivityCard date={new Date()} title="Contributor withdrew" type={MEMBER_WITHDREW}>
      <p>Michelle Paez has left the group</p>
    </GroupActivityCard>
  ))
  .add('activity-card/group-edited', () => (
    <GroupActivityCard date={new Date()} title="Group edited" type={PURCHASE_UPDATED}>
      <p>[User full name] changed the price from $2,000.00 to $20,000.00.</p>
    </GroupActivityCard>
  ))
  .add('activity-card/user-comment', () => (
    <UserCommentCard
      date={new Date()}
      src="http://i.pravatar.cc/300"
      title="Jamie Smith"
      comment="This is sample text used to demonstrate the body of this component."
    />
  ));
