import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory, withGreyContainer } from '../../util/decorators';
import LoginSeparator from '../../../components/consumer/mobile/login-separator';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Atomic Components', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGreyContainer)
  .add('login-separator', () => <LoginSeparator label="or" />);
