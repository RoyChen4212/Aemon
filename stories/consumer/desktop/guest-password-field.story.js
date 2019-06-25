import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';
import GuestPasswordField from '../../../components/consumer/desktop/guest-password-field';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=2237%3A557';

storiesOf('Consumer/Desktop/Form Fields/guest-password-field', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('guest-password-field/default', () => (
    <FieldStateProvider
      component={GuestPasswordField}
      name="password"
      label="Create Password"
      hint="Don't create an account, just contribute."
      placeholder="Must be at least 8 characters"
      onChange={action('change')}
      required
    />
  ))
  .add('guest-password-field/disabled', () => (
    <FieldStateProvider
      component={GuestPasswordField}
      name="password"
      label="Create password"
      value={{ guest: true }}
      hint="Don't create an account, just contribute."
      onChange={action('change')}
      required
    />
  ))
  .add('guest-password-field/error', () => (
    <FieldStateProvider
      component={GuestPasswordField}
      name="password"
      label="Create password"
      hint="Don't create an account, just contribute."
      error="Something went wrong!"
      onChange={action('change')}
      required
    />
  ));
