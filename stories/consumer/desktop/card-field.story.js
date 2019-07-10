import React from 'react';
import { storiesOf } from '@storybook/react';
import CardField from '../../../components/consumer/desktop/card-field/card-field';

import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Form Fields/card-field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('default', () => <CardField label="Card Number" />)
  .add('visa', () => <CardField label="Card Number" cardType="visa" />)
  .add('master', () => <CardField label="Card Number" cardType="master" />)
  .add('american_express', () => <CardField label="Card Number" cardType="american_express" />)
  .add('discover', () => <CardField label="Card Number" cardType="discover" />)
  .add('diners_club', () => <CardField label="Card Number" cardType="diners_club" />)
  .add('visa_master_allowed', () => (
    <CardField label="Card Number" cardType="master" allowedCardTypes={['visa', 'master']} />
  ))
  .add('visa_master_american_express_allowed', () => (
    <CardField label="Card Number" cardType="master" allowedCardTypes={['visa', 'master', 'american_express']} />
  ));
