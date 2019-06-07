import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithFigma } from 'storybook-addon-figma';
import AddComment from '../../../components/consumer/mobile/add-comment';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl =
  'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=557%3A38';

storiesOf('Consumer/Mobile/Activity Section Components/AddComment', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Default', () => (
    <AddComment
      hint="Only logged-in group members see comments."
      ctaLabel="Post comment"
      textLabel="Write a comment..."
      avatarSrc="http://i.pravatar.cc/300"
      fullName="John Doe"
    />
  ))
  .add('With initials', () => (
    <AddComment
      hint="Only logged-in group members see comments."
      ctaLabel="Post comment"
      textLabel="Write a comment..."
      fullName="John Doe"
    />
  ))
  .add('With Error', () => (
    <AddComment
      hint="Only logged-in group members see comments."
      ctaLabel="Post comment"
      textLabel="Write a comment..."
      error="This is a bad error"
      avatarSrc="http://i.pravatar.cc/300"
      fullName="John Doe"
    />
  ));
