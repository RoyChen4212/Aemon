import React from 'react';
import { storiesOf } from '@storybook/react';

import TipBlock from '../../../components/consumer/mobile/tip-block';
import { withContainer, wrapStory } from '../../util/decorators';
import { iconTypes } from '../../../components/consumer/shared/icon-types';
import { colorTypes } from '../../../components/consumer/shared/color-types';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Info', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('tip-block', () => (
    <TipBlock
      icon={iconTypes.QUESTION_MARK}
      color={colorTypes.GRAY_10}
      title="Label"
      description="Body text goes here"
    />
  ));
