import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithFigma } from 'storybook-addon-figma';
import { withContainer, wrapStory } from '../../util/decorators';
import PurchaseImage from '../../../components/consumer/desktop/purchase-image';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl =
  'https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=997%3A8470';

storiesOf('Consumer/Desktop/Info/purchase-image', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('purchase-image/default', () => <PurchaseImage src="https://picsum.photos/200/100" />);
