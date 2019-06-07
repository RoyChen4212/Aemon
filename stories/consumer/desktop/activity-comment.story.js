import React from 'react';
import { storiesOf } from '@storybook/react';
import ActivityComment from '../../../components/consumer/desktop/activity-comment';
import ActivityCard from '../../../components/consumer/desktop/activity-card';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Atomic Components/Activity Comment', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('With userId', () => (
    <ActivityComment
      title="John Doe"
      comment="This is a longer user comment to demonstrate how the comment bubble should behave when there are multiple lines of text. Lorerm ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque."
      time={new Date()}
      userId="01234567-abcd-abcd-abcd-0123456789ab"
    />
  ))
  .add('With src', () => (
    <ActivityComment
      title="John Doe"
      comment="This is a longer user comment to demonstrate how the comment bubble should behave when there are multiple lines of text. Lorerm ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque."
      time={new Date()}
      src="http://i.pravatar.cc/300"
    />
  ))
  .add('With Initials', () => (
    <ActivityComment
      title="John Doe"
      comment="This is a longer user comment to demonstrate how the comment bubble should behave when there are multiple lines of text. Lorerm ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque."
      time={new Date()}
      fullName="John Doe"
    />
  ))
  .add('Along with ActivityCard', () => (
    <React.Fragment>
      <ActivityComment
        title="John Doe"
        comment="This is a longer user comment to demonstrate how the comment bubble should behave when there are multiple lines of text. Lorerm ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque."
        time={new Date()}
        fullName="John Doe"
      />
      <ActivityCard type="purchase_updated" title="Purchase Updated" time={new Date()}>
        <p>User changed the price from $2,000 to $20,000.</p>
      </ActivityCard>
    </React.Fragment>
  ));
