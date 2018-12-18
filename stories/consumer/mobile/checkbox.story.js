import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  Checkbox,
} from '../../../components/consumer/mobile/form-fields';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';


import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Form Fields/Checkbox', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('No label/Unhecked', () => (
    <FieldStateProvider
      component={Checkbox}
      name="field1"
      onChange={action('change')}
    />
  ))
  .add('No label/Checked', () => (
    <FieldStateProvider
      component={Checkbox}
      name="field1"
      value="true"
      onChange={action('change')}
    />
  ))
  .add('With Label/Checked', () => (
    <FieldStateProvider
      component={Checkbox}
      label="A checked checkbox field"
      value="true"
      onChange={action('change')}
    />
  ))
  .add('With label/Unchecked', () => (
    <FieldStateProvider
      component={Checkbox}
      name="field1"
      label="A checkbox field"
      onChange={action('change')}
    />
  ))
  .add('With label/Error', () => (
    <FieldStateProvider
      component={Checkbox}
      label="A checkbox field"
      error="An error"
      onChange={action('change')}
    />
  ));
