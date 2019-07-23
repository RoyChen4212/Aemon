import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory } from '../../util/decorators';
import PurchaseImage from '../../../components/consumer/mobile/purchase-image';
import img from '../../../components/consumer/shared/img/purchase-image.svg';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Info', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('purchase-image', () => <PurchaseImage src={img} />);
