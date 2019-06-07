import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import SegmentedControl from '../../../components/consumer/mobile/segmented-control';
import { wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl =
  'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=551%3A1493';

storiesOf(
  'Consumer/Mobile/Activity Section Components/Segmented Control',
  module
)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
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
