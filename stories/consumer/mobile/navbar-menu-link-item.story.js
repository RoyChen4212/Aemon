import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory, withGrey20Container } from '../../util/decorators';
import NavbarMenuLinkItem from '../../../components/consumer/mobile/navbar-menu-link-item';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Info/Navbar', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('navbar-menu-link-item', () => <NavbarMenuLinkItem label="Label" href="http://google.com" />);
