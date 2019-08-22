import React from 'react';
import { storiesOf } from '@storybook/react';
import CardField from '../../../components/consumer/mobile/card-field';

import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Form Fields/card-field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('card field/default', () => <CardField label="Card Number" />)
  .add('card field/visa_master_allowed', () => <CardField label="Card Number" allowedCardTypes={['visa', 'master']} />)
  .add('card field/visa_master_amex_allowed', () => (
    <CardField label="Card Number" allowedCardTypes={['visa', 'master', 'american_express']} />
  ));
