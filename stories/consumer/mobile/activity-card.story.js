import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { ActivityCard, UserCommentCard } from '../../../components/consumer/mobile/activity-card';
import { H1 } from '../../../components/consumer/mobile/heading';
import { withGreyContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=535%3A12';
const figmaUserCommentUrl = 'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=551%3A445';
storiesOf('Consumer/Mobile/Atomic Components/ActivityCard', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withGreyContainer)
  .add('Standard', () => (
    <ActivityCard date={new Date()}>
      <div>
        <H1>Whatever content</H1>
        <p>
          Give any content to this component.
        </p>
      </div>
    </ActivityCard>
  ))
  .add('White Card', () => (
    <ActivityCard type={ActivityCard.types.white} date={new Date()}>
      <div>
        <h3>Whatever content</h3>
        <p>
          Give any content to this component.
        </p>
      </div>
    </ActivityCard>
  ));

storiesOf('Consumer/Mobile/Atomic Components/UserCommentCard', module)
  .addDecorator(storyFn => <WithFigma url={figmaUserCommentUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withGreyContainer)
  .add('Standard', () => (
    <UserCommentCard
      date={new Date()}
      userName="Jamie Smith"
      comment="This is sample text used to demonstrate the body of this component."
    />
  ));

