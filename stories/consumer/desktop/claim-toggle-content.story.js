import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ClaimToggleContent from '../../../components/consumer/desktop/claim-toggle-content';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Payment Settings/claim-toggle-content', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('claim-toggle-content/default', () => (
    <FieldStateProvider
      component={ClaimToggleContent}
      label="Label"
      explainer="Explainer text"
      value="true"
      onChange={action('change')}
    />
  ))
  .add('claim-toggle-content/error', () => (
    <FieldStateProvider
      component={ClaimToggleContent}
      label="Label"
      explainer="Explainer text"
      value="true"
      error="An error"
      onChange={action('change')}
    />
  ));
