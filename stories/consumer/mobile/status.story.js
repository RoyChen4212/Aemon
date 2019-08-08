import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory, withMobileSizing, withGrey20Container } from '../../util/decorators';

import Status from '../../../components/consumer/mobile/status';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { iconTypes } from '../../../components/consumer/shared/icon-types';

storiesOf('Consumer/Mobile/Info/Status', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .addDecorator(withMobileSizing)
  .add('default', () => <Status label="Label" value="Body" iconType={iconTypes.PRICE_TAG} />)
  .add('tooltip', () => <Status label="Label" value="Body" iconType={iconTypes.PRICE_TAG} tooltip="Help message" />);
