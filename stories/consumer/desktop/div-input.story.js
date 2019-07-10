import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory } from '../../util/decorators';
import DivInput from '../../../components/consumer/desktop/div-input';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Atomic Components/Inputs', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('div-input', () => <DivInput />);
