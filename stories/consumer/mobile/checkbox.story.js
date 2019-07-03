import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from '../../../components/consumer/mobile/checkbox';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Form Fields/checkbox', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('checkbox/simple', () => <FieldStateProvider component={Checkbox} name="field1" onChange={action('change')} />)
  .add('checkbox/default', () => (
    <FieldStateProvider
      component={Checkbox}
      label="A checked checkbox field"
      value="true"
      onChange={action('change')}
    />
  ))
  .add('checkbox/error', () => (
    <FieldStateProvider component={Checkbox} label="A checkbox field" error="An error" onChange={action('change')} />
  ));
