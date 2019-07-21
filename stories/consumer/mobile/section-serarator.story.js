import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory, withGreyContainer } from '../../util/decorators';
import SectionSeparator from '../../../components/consumer/mobile/section-separator';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Atomic Components', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGreyContainer)
  .add('section-separator', () => (
    <div>
      <div style={{ border: '1px solid black' }}>Section1</div>
      <SectionSeparator />
      <div style={{ border: '1px solid black' }}>Section2</div>
    </div>
  ));
