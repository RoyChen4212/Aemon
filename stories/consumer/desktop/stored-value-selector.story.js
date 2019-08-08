import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import StoredValueSelector from '../../../components/consumer/desktop/stored-value-selector';
import Picker from '../../../components/consumer/desktop/picker';
import TextField from '../../../components/consumer/desktop/text-field';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const options = [
  { label: { term: 'First option' }, value: 'first' },
  { label: { term: 'Second option' }, value: 'second' },
  { label: { term: 'Extremely long text here, this should expand menu' }, value: 'third' },
  { label: { term: 'Add new item' }, value: 'new' },
];

const children = (
  <FieldStateProvider
    component={TextField}
    name="stored-value-selector-new-textfield"
    onChange={action('onChangeText')}
  />
);

storiesOf('Consumer/Desktop/Form Fields/Composed', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('stored-value-selector/option-selected', () => (
    <FieldStateProvider
      component={StoredValueSelector}
      name="stored-value-selector"
      label="Label"
      picker={Picker}
      value="first"
      options={options}
      defaultOption="new"
      orText="Or"
      addNewText="Add New"
      onChange={action('onChange')}
    >
      {children}
    </FieldStateProvider>
  ))
  .add('stored-value-selector/new', () => (
    <FieldStateProvider
      component={StoredValueSelector}
      name="stored-value-selector"
      label="Label"
      picker={Picker}
      value="new"
      options={options}
      defaultOption="new"
      orText="Or"
      addNewText="Add New"
      onChange={action('onChange')}
    >
      {children}
    </FieldStateProvider>
  ));
