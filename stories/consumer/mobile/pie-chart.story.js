import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory, withGrey20Container } from '../../util/decorators';
import PieChart from '../../../components/consumer/mobile/pie-chart';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { colorTypes } from '../../../components/consumer/shared/color-types';

storiesOf('Consumer/Mobile/Info', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('pie-chart', () => (
    <PieChart
      label="$XX,XXX.XX"
      hint="Payment X/N"
      dataPoints={[
        {
          percentage: 68,
          color: colorTypes.GREEN_60,
        },
        {
          percentage: 20,
          color: colorTypes.YELLOW_60,
        },
      ]}
    />
  ));
