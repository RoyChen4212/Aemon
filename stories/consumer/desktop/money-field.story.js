import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';
import MoneyField from '../../../components/consumer/desktop/money-field';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Form Fields/money-field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('price-input/default', () => <FieldStateProvider component={MoneyField} onChange={action('change')} />)
  .add('price-input/with-currency-sign', () => (
    <FieldStateProvider component={MoneyField} currency="GBP" onChange={action('change')} />
  ))
  .add('price-input/with-currency-abbreviation', () => (
    <FieldStateProvider component={MoneyField} currency="CHF" onChange={action('change')} />
  ));
