import React from 'react';
import { storiesOf } from '@storybook/react';

import SetupHeader from '../../../components/consumer/mobile/setup-header';
import { withGreyContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Section Components/setup-header', module)
  .addDecorator(wrapStory)
  .addDecorator(withGreyContainer)
  .add('setup-header/no-progress-bar', () => (
    <SetupHeader label="[Purchase name]" viewInfoText="View Info" hideInfoText="Hide Info" />
  ))
  .add('setup-header/progress-bar', () => (
    <SetupHeader
      label="[Purchase name]"
      viewInfoText="View Info"
      hideInfoText="Hide Info"
      hint="Step X of Y"
      stepCount={5}
      progress={1}
    />
  ))
  .add('setup-header/expanded', () => (
    <SetupHeader
      label="[Purchase name]"
      viewInfoText="View Info"
      hideInfoText="Hide Info"
      hint="Step X of Y"
      stepCount={5}
      progress={1}
    >
      <div style={{ padding: '16px 16px 300px' }}>Purchase details go right here</div>
    </SetupHeader>
  ));
