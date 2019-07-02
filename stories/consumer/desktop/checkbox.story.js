import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Checkbox } from '../../../components/consumer/desktop/checkbox';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Form Fields/checkbox', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('checkbox/simple/unchecked', () => (
    <FieldStateProvider component={Checkbox} name="field1" onChange={action('change')} />
  ))
  .add('checkbox/simple/checked', () => (
    <FieldStateProvider component={Checkbox} name="field1" value="true" onChange={action('change')} />
  ))
  .add('checkbox/simple/disabled', () => (
    <FieldStateProvider component={Checkbox} name="field1" value="true" disabled onChange={action('change')} />
  ))
  .add('checkbox/checked', () => (
    <FieldStateProvider
      component={Checkbox}
      label="A checked checkbox field"
      hint="A hint here"
      value="true"
      onChange={action('change')}
    />
  ))
  .add('checkbox/unchecked', () => (
    <FieldStateProvider
      component={Checkbox}
      name="field1"
      label="A checkbox field"
      hint="A hint here"
      onChange={action('change')}
    />
  ))
  .add('checkbox/disabled', () => (
    <FieldStateProvider
      component={Checkbox}
      name="field1"
      value="true"
      label="A checkbox field"
      hint="A hint here"
      disabled
      onChange={action('change')}
    />
  ))
  .add('checkbox/error', () => (
    <FieldStateProvider
      component={Checkbox}
      label="A checkbox field"
      hint="A hint here"
      error="An error"
      onChange={action('change')}
    />
  ));
