import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withContainer,
  wrapStory,
  withConfigurableGreyContainer,
  withMobileSizing,
  withMiddleSizing,
} from '../../util/decorators';
import NavbarBrand from '../../../components/consumer/mobile/navbar-brand';
import demoLogo from '../../../components/consumer/mobile/img/demo-logo.svg';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarMenuLinkItem from '../../../components/consumer/mobile/navbar-menu-link-item';
import NavbarMenuLanguageItem from '../../../components/consumer/mobile/navbar-menu-language-item';

storiesOf('Consumer/Mobile/Info/Navbar', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withMobileSizing)
  .addDecorator(withConfigurableGreyContainer('300px'))
  .add('navbar-brand', () => (
    <NavbarBrand poweredByText="powered by" merchantLogoUrl={demoLogo}>
      <NavbarMenuLinkItem label="Login" href="/login" />
      <NavbarMenuLinkItem label="Sign up" href="/signup" />
      <NavbarMenuLinkItem label="Help" href="/help" />
      <NavbarMenuLanguageItem
        label="Language"
        languages={[{ label: 'English', value: 'en' }, { label: 'Spanish', value: 'sp' }]}
      />
    </NavbarBrand>
  ));

storiesOf('Consumer/Mobile/Info/Navbar', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withMiddleSizing)
  .addDecorator(withConfigurableGreyContainer('300px'))
  .add('navbar-brand/middle-size', () => (
    <NavbarBrand poweredByText="powered by" merchantLogoUrl={demoLogo}>
      <NavbarMenuLinkItem label="Login" href="/login" />
      <NavbarMenuLinkItem label="Sign up" href="/signup" />
      <NavbarMenuLinkItem label="Help" href="/help" />
      <NavbarMenuLanguageItem
        label="Language"
        languages={[{ label: 'English', value: 'en' }, { label: 'Spanish', value: 'sp' }]}
      />
    </NavbarBrand>
  ));
