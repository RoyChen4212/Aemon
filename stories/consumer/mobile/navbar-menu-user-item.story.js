import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory, withGrey20Container } from '../../util/decorators';
import NavbarMenuUserItem from '../../../components/consumer/mobile/navbar-menu-user-item';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Info/NavBar', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('navbar-menu-user-item', () => <NavbarMenuUserItem fullName="Samvel Antanyan" hint="my Awesome Hint" />);
