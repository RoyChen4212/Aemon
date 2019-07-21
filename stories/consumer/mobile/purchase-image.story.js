import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory, withMobileSizing, withGreyContainer } from '../../util/decorators';
import PurchaseImage from '../../../components/consumer/mobile/purchase-image';
import img from '../../../components/consumer/shared/img/purchase-image.svg';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Info', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withMobileSizing)
  .addDecorator(withGreyContainer)
  .add('purchase-image', () => <PurchaseImage src={img} />);
