import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SegmentedControl from '../../../components/consumer/mobile/segmented-control';
import { wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Activity Section Components/Segmented Control', module)
  .addDecorator(wrapStory)
  .add('Standard', () => (
    <SegmentedControl
      segments={[
        { label: 'Summary', type: SegmentedControl.types.list },
        { label: 'Activity', type: SegmentedControl.types.pulse, active: true },
      ]}
      onChange={action('change')}
    />
  ));
