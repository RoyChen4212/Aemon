import React from 'react';
import { storiesOf } from '@storybook/react';
import CardField from '../../../components/consumer/desktop/card-field/card-field';

import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Form Fields/card-field', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('default', () => <CardField label="Card Number" />);
