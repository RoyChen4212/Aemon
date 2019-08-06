import React from 'react';
import { storiesOf } from '@storybook/react';
import CardField from '../../../components/consumer/desktop/card-field/card-field';

import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Form Fields/card-field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('card-field/default', () => <CardField label="Card Number" />)
  .add('card-field/visa', () => <CardField label="Card Number" cardType="visa" />)
  .add('card-field/master', () => <CardField label="Card Number" cardType="master" />)
  .add('card-field/american_express', () => <CardField label="Card Number" cardType="american_express" />)
  .add('card-field/discover', () => <CardField label="Card Number" cardType="discover" />)
  .add('card-field/diners_club', () => <CardField label="Card Number" cardType="diners_club" />)
  .add('card-field/visa_master_allowed', () => (
    <CardField label="Card Number" cardType="master" allowedCardTypes={['visa', 'master']} />
  ))
  .add('card-field/visa_master_amex_allowed', () => (
    <CardField label="Card Number" cardType="master" allowedCardTypes={['visa', 'master', 'american_express']} />
  ));
