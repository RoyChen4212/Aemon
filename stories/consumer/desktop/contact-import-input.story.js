import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withContainer, wrapStory, withGrey20BoxContainer } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { iconTypes } from '../../../components/consumer/shared/icon-types';
import FieldStateProvider from '../../util/field-state-provider';
import ContactImportInput from '../../../components/consumer/desktop/contact-import-input';

storiesOf('Consumer/Desktop/Add Contributors/contact-import-input', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withGrey20BoxContainer)
  .add('default', () => (
    <FieldStateProvider
      component={ContactImportInput}
      name="contact-import-input"
      placeholder="Type or click to import"
      options={[
        { icon: iconTypes.GMAIL, label: 'Find friends in you Gmail account', value: 'option1' },
        { icon: iconTypes.YAHOO, label: 'Find friends in your Yahoo account', value: 'option2' },
        {
          icon: iconTypes.OUTLOOK,
          label: 'Find friends in your Hotmail/Outlook/MSN.com/Live.com account',
          value: 'option3',
        },
      ]}
      onSelect={action('select')}
      onChange={action('onChange')}
    />
  ))
  .add('label', () => (
    <FieldStateProvider
      component={ContactImportInput}
      name="contact-import-input"
      placeholder="Type or click to import"
      options={[
        { icon: iconTypes.GMAIL, label: 'Find friends in you Gmail account', value: 'option1' },
        { icon: iconTypes.YAHOO, label: 'Find friends in your Yahoo account', value: 'option2' },
        {
          icon: iconTypes.OUTLOOK,
          label: 'Find friends in your Hotmail/Outlook/MSN.com/Live.com account',
          value: 'option3',
        },
      ]}
      label="Label"
      onSelect={action('select')}
      onChange={action('onChange')}
    />
  ))
  .add('error', () => (
    <FieldStateProvider
      component={ContactImportInput}
      name="contact-import-input"
      placeholder="Type or click to import"
      options={[
        { icon: iconTypes.GMAIL, label: 'Find friends in you Gmail account', value: 'option1' },
        { icon: iconTypes.YAHOO, label: 'Find friends in your Yahoo account', value: 'option2' },
        {
          icon: iconTypes.OUTLOOK,
          label: 'Find friends in your Hotmail/Outlook/MSN.com/Live.com account',
          value: 'option3',
        },
      ]}
      error="error"
      onSelect={action('select')}
      onChange={action('onChange')}
    />
  ));
