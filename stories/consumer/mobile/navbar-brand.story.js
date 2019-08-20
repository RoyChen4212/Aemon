import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory, withConfigurableGreyContainer } from '../../util/decorators';
import NavbarBrand from '../../../components/consumer/mobile/navbar-brand';
import demoLogo from '../../../components/consumer/mobile/img/demo-logo.svg';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarMenuLinkItem from '../../../components/consumer/mobile/navbar-menu-link-item';
import NavbarMenuLanguageItem from '../../../components/consumer/mobile/navbar-menu-language-item';
import NavbarMenuUserItem from '../../../components/consumer/mobile/navbar-menu-user-item';

storiesOf('Consumer/Mobile/Info/Navbar', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withConfigurableGreyContainer('500px'))
  .add('navbar-brand/logged-out', () => (
    <NavbarBrand poweredByText="powered by" merchantLogoUrl={demoLogo}>
      <NavbarMenuLinkItem label="Login" href="/login" />
      <NavbarMenuLinkItem label="Sign up" href="/signup" />
      <NavbarMenuLinkItem label="Help" href="/help" />
      <NavbarMenuLanguageItem
        label="Language"
        languages={[{ label: 'English', value: 'en' }, { label: 'Spanish', value: 'sp' }]}
      />
    </NavbarBrand>
  ))
  .add('navbar-brand/logged-in', () => (
    <NavbarBrand poweredByText="powered by" merchantLogoUrl={demoLogo}>
      <NavbarMenuUserItem fullName="Firstname Lastname" hint="Logged in as" />
      <NavbarMenuLinkItem label="Your Groups" href="/your-groups" />
      <NavbarMenuLinkItem label="Your Transactions" href="/your_transactions" />
      <NavbarMenuLinkItem label="Your Account" href="/your_account" />
      <NavbarMenuLinkItem label="Help" href="/help" />
      <NavbarMenuLinkItem label="Logout" href="/logout" />
      <NavbarMenuLanguageItem
        label="Language"
        languages={[{ label: 'English', value: 'en' }, { label: 'Spanish', value: 'sp' }]}
      />
    </NavbarBrand>
  ));
