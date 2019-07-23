import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory } from '../../util/decorators';
import SectionSeparator from '../../../components/consumer/mobile/section-separator';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Atomic Components', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('section-separator', () => (
    <div>
      <div>Section1</div>
      <SectionSeparator />
      <div>Section2</div>
    </div>
  ));
