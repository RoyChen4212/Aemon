import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PaymentMethodSelector from '../../../components/consumer/desktop/payment-method-selector';
import { PICKER_EMPTY_VALUE } from '../../../components/consumer/desktop/picker';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';
import { cardTypes } from '../../../components/consumer/shared/card-types';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const options = [
  { cardType: cardTypes[0], label: 'ending in XXXX (exp:mm/yy)', value: 'visa' },
  { cardType: cardTypes[1], label: 'ending in XXXX (exp:mm/yy)', value: 'master' },
  { cardType: cardTypes[2], label: 'ending in XXXX (exp:mm/yy)', value: 'american_express' },
  { cardType: cardTypes[3], label: 'ending in XXXX (exp:mm/yy)', value: 'discover' },
  { cardType: cardTypes[4], label: 'ending in XXXX (exp:mm/yy)', value: 'diners_club' },
  { cardType: null, label: 'Add new [term]', value: PICKER_EMPTY_VALUE },
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
      value={PICKER_EMPTY_VALUE}
      onChange={action('onChange')}
      options={options}
    />
  ));
