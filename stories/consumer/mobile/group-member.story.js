import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory } from '../../util/decorators';
import GroupMember from '../../../components/consumer/mobile/group-member';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Info/group-member', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('default', () => <GroupMember fullName="Jon Doe" hint="hint" avatar="https://i.pravatar.cc/32" />)
  .add('no-hint', () => <GroupMember fullName="Jon Doe" avatar="https://i.pravatar.cc/32" />);
