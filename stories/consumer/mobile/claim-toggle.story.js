import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withContainer, wrapStory } from '../../util/decorators';
import ClaimToggle from '../../../components/consumer/mobile/claim-toggle';
import FieldStateProvider from '../../util/field-state-provider';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Atomic Components/claim-toggle', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('default', () => <FieldStateProvider
    component={ClaimToggle}
    label="Primary Text"
    secondaryText="Secondary Text "
    onChange={action('change')}
  />)
  .add('error', () => <FieldStateProvider
    component={ClaimToggle}
    label="Primary Text"
    secondaryText="Secondary Text "
    error
    onChange={action('change')}
  />);
