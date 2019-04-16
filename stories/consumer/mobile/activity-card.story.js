import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { ActivityCard, UserCommentCard, GroupActivityCard } from '../../../components/consumer/mobile/activity-card';
import ActivityThumbnail, {
  MEMBER_WITHDREW,
  MEMBER_JOINED,
  PURCHASE_UPDATED,
} from '../../../components/consumer/mobile/activity-thumbnail';
import { H1 } from '../../../components/consumer/mobile/heading';
import { withGreyContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=551%3A455';
const figmaUserCommentUrl = 'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=551%3A445';

storiesOf('Consumer/Mobile/Atomic Components/ActivityCard/GroupActivityCard', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withGreyContainer)
  .add('New contributor', () => (
    <GroupActivityCard date={new Date()} title="New contributor" type={MEMBER_JOINED}>
      <p>Michelle Paez has joined the group</p>
    </GroupActivityCard>
  ))
  .add('Contributor withdrew', () => (
    <GroupActivityCard date={new Date()} title="Contributor withdrew" type={MEMBER_WITHDREW}>
      <p>Michelle Paez has left the group</p>
    </GroupActivityCard>
  ))
  .add('Group edited', () => (
    <GroupActivityCard date={new Date()} title="Group edited" type={PURCHASE_UPDATED}>
      <p>[User full name] changed the price from $2,000.00 to $20,000.00.</p>
    </GroupActivityCard>
  ));

storiesOf('Consumer/Mobile/Atomic Components/ActivityCard/UserCommentCard', module)
  .addDecorator(storyFn => <WithFigma url={figmaUserCommentUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withGreyContainer)
  .add('With userId', () => (
    <UserCommentCard
      date={new Date()}
      userId='22d9680a-9159-49cf-a923-a99d756b501f'
      title="Jamie Smith"
      comment="This is sample text used to demonstrate the body of this component."
    />
  ))
  .add('With src', () => (
    <UserCommentCard
      date={new Date()}
      src="http://i.pravatar.cc/300"
      title="Jamie Smith"
      comment="This is sample text used to demonstrate the body of this component."
    />
  ))
  .add('With initials', () => (
    <UserCommentCard
      date={new Date()}
      userId='22d9680a-9159-49cf-a923-a99d756b501f'
      title="John Doe"
      fullName="John Doe"
      comment="This is sample text used to demonstrate the body of this component."
    />
  ));

