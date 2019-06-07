import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithFigma } from 'storybook-addon-figma';
import AddComment from '../../../components/consumer/desktop/add-comment';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=110%3A128';

storiesOf('Consumer/Desktop/Form Components/AddComment', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Default', () => (
    <AddComment
      hint="Only logged-in group members see comments."
      ctaLabel="Post comment"
      textLabel="Write a comment..."
      avatarSrc="http://i.pravatar.cc/300"
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
    />
  ));
