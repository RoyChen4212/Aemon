import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NoAccountWarning from '../../../components/consumer/mobile/no-account-warning';
import { wrapStory } from '../../util/decorators';
import 'bootstrap/dist/css/bootstrap.css';
import '../../style.css';

storiesOf('Consumer/Mobile/activity-header', module)
  .addDecorator(wrapStory)
  .add('no-account-warning/default', () => (
    <NoAccountWarning
      title="Showing only group status activity"
      text="You need an account to see group comments and posts"
      ctaText="Create account"
      onClick={action('onClick')}
    />
  ));
