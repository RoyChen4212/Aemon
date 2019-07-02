import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory } from '../../util/decorators';
import PurchaseImage from '../../../components/consumer/desktop/purchase-image';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Info', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('purchase-image', () => <PurchaseImage src="https://picsum.photos/200/100" />);
