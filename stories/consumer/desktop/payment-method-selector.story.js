import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PaymentMethodSelector, {
  PAYMENT_METHOD_ADD_VALUE,
  cardTypes,
} from '../../../components/consumer/desktop/payment-method-selector';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const options = [
  { cardType: cardTypes.VISA, label: 'ending in XXXX (exp:mm/yy)', value: 'visa' },
  { cardType: cardTypes.MASTER, label: 'ending in XXXX (exp:mm/yy)', value: 'master' },
  { cardType: cardTypes.AMERICAN_EXPRESS, label: 'ending in XXXX (exp:mm/yy)', value: 'american_express' },
  { cardType: cardTypes.DISCOVER, label: 'ending in XXXX (exp:mm/yy)', value: 'discover' },
  { cardType: cardTypes.DINERS_CLUB, label: 'ending in XXXX (exp:mm/yy)', value: 'diners_club' },
  { cardType: cardTypes.ADD_NEW, label: 'Add new [term]', value: PAYMENT_METHOD_ADD_VALUE },
];

storiesOf('Consumer/Desktop/Form Fields/payment-method-selector', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('payment-method-selector/option-selected', () => (
    <FieldStateProvider
      component={PaymentMethodSelector}
      name="payment-method-selector"
      label="Select saved payment method"
      value="visa"
      onChange={action('onChange')}
      options={options}
    />
  ))
  .add('payment-method-selector/new', () => (
    <FieldStateProvider
      component={PaymentMethodSelector}
      name="payment-method-selector"
      label="Select stored payment method"
      hint="Select one awesome value"
      value={PAYMENT_METHOD_ADD_VALUE}
      onChange={action('onChange')}
      options={options}
    />
  ));
