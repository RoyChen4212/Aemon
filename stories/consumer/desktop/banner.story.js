import React from 'react';
import { storiesOf } from '@storybook/react';
import Banner from '../../../components/consumer/desktop/banner';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const sampleText = 'Pay By Group Rules';

storiesOf('Consumer/Desktop/Atomic Components', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('banner', () => <Banner text={sampleText} />);
