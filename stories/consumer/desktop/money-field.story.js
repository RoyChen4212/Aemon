import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';
import MoneyField from '../../../components/consumer/desktop/money-field';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Atomic Components/price-input', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('price-input/default', () => <FieldStateProvider component={MoneyField} />)
  .add('price-input/with-default-value', () => <FieldStateProvider component={MoneyField} defaultValue={1899} />)
  .add('price-input/with-different-currency', () => <FieldStateProvider component={MoneyField} currency="GBP" />);
