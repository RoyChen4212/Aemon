import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withContainer, wrapStory, withGreyContainer, withMobileSizing, withMiddleSizing } from '../../util/decorators';
import NavbarBrand from '../../../components/consumer/mobile/navbar-brand';

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
      // eslint-disable-next-line global-require
      merchantLogoUrl={require('../../../components/consumer/mobile/img/demo-logo.svg')}
      onMenuClick={action('menuClicked')}
      menuIconVisible
    />
  ));

storiesOf('Consumer/Mobile/Info/Navbar', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withMiddleSizing)
  .addDecorator(withGreyContainer)
  // eslint-disable-next-line global-require
  .add('navbar-brand/middle-size', () => (
    <NavbarBrand
      poweredByText="powered by"
      onMenuClick={action('menuClicked')}
      // eslint-disable-next-line global-require
      merchantLogoUrl={require('../../../components/consumer/mobile/img/demo-logo.svg')}
      menuIconVisible
    />
  ));
