import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ClaimToggle from '../../../components/consumer/desktop/claim-toggle';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Payment Settings/claim-toggle', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('claim-toggle/default', () => (
    <FieldStateProvider component={ClaimToggle} label="Label" explainer="Explainer text" onChange={action('change')} />
  ))
  .add('claim-toggle/required', () => (
    <FieldStateProvider
      component={ClaimToggle}
      label="Label"
      explainer="Explainer text"
      required
      onChange={action('change')}
    />
  ))
  .add('claim-toggle/locked', () => (
    <FieldStateProvider
      component={ClaimToggle}
      label="Label"
      explainer="Explainer text"
      value
      disabled
      onChange={action('change')}
    />
  ));
