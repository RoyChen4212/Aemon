import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from '../../../components/consumer/mobile/checkbox';
import { withContainer, wrapStory, withGrey20Container } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Form Fields/checkbox', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('checkbox/simple', () => <Checkbox name="field1" onChange={action('check')} />)
  .add('checkbox/defaultChecked', () => <Checkbox name="field1" onChange={action('check')} value />)
  .add('checkbox/default', () => <Checkbox name="field2" label="A checkbox field" onChange={action('check')} />)
  .add('checkbox/disabled', () => (
    <Checkbox name="field3" label="A checkbox field" disabled onChange={action('check')} />
  ))
  .add('checkbox/disabled-checked', () => (
    <Checkbox name="field3" label="A checkbox field" onChange={action('check')} value disabled />
  ))
  .add('checkbox/error', () => (
    <Checkbox name="field4" label="A checkbox field" error="An error" onChange={action('check')} />
  ));
