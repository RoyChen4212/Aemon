import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withContainer, wrapStory, withGrey20Container } from '../../util/decorators';
import NavbarMenuLanguageItem from '../../../components/consumer/mobile/navbar-menu-language-item';
import FieldStateProvider from '../../util/field-state-provider';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Info/Navbar', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20Container)
  .add('navbar-menu-language-item/default', () => (
    <NavbarMenuLanguageItem
      languages={[{ label: 'English', value: 'en' }, { label: 'Español', value: 'es' }]}
      onChange={action('onChange')}
      label="Language"
    />
  ));
