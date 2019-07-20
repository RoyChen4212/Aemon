import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withContainer, wrapStory, withGreyContainer, withMobileSizing, withMiddleSizing } from '../../util/decorators';
import NavbarBrand from '../../../components/consumer/mobile/navbar-brand';
import demoLogo from '../../../components/consumer/mobile/img/demo-logo.svg';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Info/Navbar', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withMobileSizing)
  .addDecorator(withGreyContainer)
  .add('navbar-brand', () => (
    <NavbarBrand
      poweredByText="powered by"
      merchantLogoUrl={demoLogo}
      onMenuClick={action('menuClicked')}
      menuIconVisible
    />
  ));

storiesOf('Consumer/Mobile/Info/Navbar', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withMiddleSizing)
  .addDecorator(withGreyContainer)
  .add('navbar-brand/middle-size', () => (
    <NavbarBrand
      poweredByText="powered by"
      onMenuClick={action('menuClicked')}
      merchantLogoUrl={demoLogo}
      menuIconVisible
    />
  ));
