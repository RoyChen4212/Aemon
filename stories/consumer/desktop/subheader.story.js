import React from 'react';
import { storiesOf } from '@storybook/react';
import Subheader from '../../../components/consumer/desktop/subheader';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const sampleText = 'Pay By Group Rules';

storiesOf('Consumer/Desktop/Atomic Components', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('subheader', () => <Subheader text={sampleText} anchor="hi" />);
