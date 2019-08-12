import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import StoredValueSelector from '../../../components/consumer/mobile/stored-value-selector';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';
import Picker from '../../../components/consumer/mobile/picker';
import TextField from '../../../components/consumer/mobile/text-field';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const options = [
  { label: 'First option', value: 'first' },
  { label: 'Second option', value: 'second' },
  { label: 'Super long option text here', value: 'third' },
  { label: 'Add new item', value: 'new' },
];

const children = (
  <FieldStateProvider
    component={TextField}
    name="stored-value-selector-new-textfield"
    onChange={action('onChangeText')}
  />
);

storiesOf('Consumer/Mobile/Form Fields/stored-value-selector', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('stored-value-selector/existing', () => (
    <FieldStateProvider
      name="stored-value-selector"
      component={StoredValueSelector}
      label="Label"
      picker={Picker}
      value="first"
      options={options}
      addNewValue="new"
      addNewText="Add new item"
      onChange={action('onChange')}
    >
      {children}
    </FieldStateProvider>
  ))
  .add('stored-value-selector/add-new', () => (
    <FieldStateProvider
      name="stored-value-selector"
      component={StoredValueSelector}
      label="Label"
      picker={Picker}
      value="new"
      options={options}
      addNewValue="new"
      addNewText="Add new item"
      onChange={action('onChange')}
    >
      {children}
    </FieldStateProvider>
  ));
