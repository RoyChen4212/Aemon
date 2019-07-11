import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CardFormFields from '../../../components/consumer/desktop/card-form-fields';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const labels = {
  cardNumber: 'Card Number',
  expDate: 'Expiration date',
  securityCode: 'Security code',
  fullName: 'Full name',
  postalCode: 'Postal code',
};

storiesOf('Consumer/Desktop/Form Fields/card-form-fields/payment-method-fields', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('default', () => <CardFormFields labels={labels} onChange={action('change')} />)
  .add('visa', () => <CardFormFields labels={labels} cardType="visa" onChange={action('change')} />)
  .add('master', () => <CardFormFields labels={labels} cardType="master" onChange={action('change')} />)
  .add('amex', () => <CardFormFields labels={labels} cardType="american_express" onChange={action('change')} />)
  .add('discover', () => <CardFormFields labels={labels} cardType="discover" onChange={action('change')} />)
  .add('diners_club', () => <CardFormFields labels={labels} cardType="diners_club" onChange={action('change')} />)
  .add('master visa allowed', () => (
    <CardFormFields
      labels={labels}
      cardType="diners_club"
      onChange={action('change')}
      allowedCardTypes={['master', 'visa']}
    />
  ));
