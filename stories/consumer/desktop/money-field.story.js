import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithFigma } from 'storybook-addon-figma';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';
import { MoneyField } from '../../../components/consumer/desktop/money-field';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Atomic Components/price-input', module)
  .addDecorator(storyFn => (
    <WithFigma url="https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=607%3A140">
      {storyFn()}
    </WithFigma>
  ))
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('price-input/default', () => <FieldStateProvider component={MoneyField} />)
  .add('price-input/with-default-value', () => <FieldStateProvider component={MoneyField} defaultValue={1899} />)
  .add('price-input/with-comma-separator', () => <FieldStateProvider component={MoneyField} separator="," />)
  .add('price-input/with-currency-sign', () => <FieldStateProvider component={MoneyField} currencySign="£" />);
