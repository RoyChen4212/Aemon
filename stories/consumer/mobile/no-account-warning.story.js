import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';

import { NoAccountWarning } from '../../../components/consumer/mobile/no-account-warning';
import { wrapStory } from '../../util/decorators';
import 'bootstrap/dist/css/bootstrap.css';
import '../../style.css';

const figmaUrl = "https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=557%3A915";

storiesOf('Consumer/Mobile/Activity Section Components/NoAccountWarning', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .add('NoAccountWarning', () => (
    <NoAccountWarning 
      title="Showing only group status activity"
      text="You need an account to see group comments and posts"
      ctaText="Create account"
      onClick={action('onClick')}
    />
  ));