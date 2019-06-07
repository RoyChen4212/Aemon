import React from 'react';
import { storiesOf } from '@storybook/react';
import Banner from '../../../components/consumer/desktop/banner';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const sampleText = 'Pay By Group Rules';

storiesOf('Consumer/Desktop/Atomic Components/Banner', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Dark blue (default)', () => <Banner text={sampleText} />);
