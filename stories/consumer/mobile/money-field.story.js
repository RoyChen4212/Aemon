import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';
import MoneyField from '../../../components/consumer/mobile/money-field';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Form Fields/money-field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('money-field/default', () => <FieldStateProvider component={MoneyField} />)
  .add('money-field/with-currency-sign', () => <FieldStateProvider component={MoneyField} currency="GBP" />)
  .add('money-field/with-currency-abbreviation', () => <FieldStateProvider component={MoneyField} currency="CHF" />);
