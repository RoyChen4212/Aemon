import React from 'react';
import { storiesOf } from '@storybook/react';
import ActivityCard from '../../../components/consumer/desktop/activity-card';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Atomic Components/Activity Card', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('with type, title, time and description', () => (
    <ActivityCard
      type="purchase_updated"
      title="Purchase Updated"
      time={new Date()}
      description="User changed the price from $2,000 to $20,000."
    />
  ))
