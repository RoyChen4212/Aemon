import React from 'react';
import { storiesOf } from '@storybook/react';
import AddComment from '../../../components/consumer/mobile/add-comment';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/activity-header', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('add-comment/default', () => (
    <AddComment
      hint="Only logged-in group members see comments."
      ctaLabel="Post comment"
      textLabel="Write a comment..."
      avatarSrc="http://i.pravatar.cc/300"
      fullName="John Doe"
    />
  ))
  .add('add-comment/no-avatar', () => (
    <AddComment
      hint="Only logged-in group members see comments."
      ctaLabel="Post comment"
      textLabel="Write a comment..."
      fullName="John Doe"
    />
  ))
  .add('add-comment/error', () => (
    <AddComment
      hint="Only logged-in group members see comments."
      ctaLabel="Post comment"
      textLabel="Write a comment..."
      error="This is a bad error"
      avatarSrc="http://i.pravatar.cc/300"
      fullName="John Doe"
    />
  ));
