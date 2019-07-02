import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '../../../components/consumer/desktop/avatar';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Atomic Components/avatar', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('avatar/18/initials', () => <Avatar fullName="First Last" size={18} />)
  .add('avatar/18/unknown', () => <Avatar size={18} />)
  .add('avatar/32/initials', () => <Avatar fullName="First Last" size={32} />)
  .add('avatar/32/unknown', () => <Avatar size={32} />)
  .add('avatar/48/initials', () => <Avatar fullName="First Last" size={48} />)
  .add('avatar/48/unknown', () => <Avatar size={48} />);
