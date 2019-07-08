import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MultiSelectField from '../../../components/consumer/desktop/multi-select-field';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const options = [
  { label: 'Label', value: 'label1' },
  { label: 'Label', value: 'label2' },
  { label: 'Label', value: 'label3' },
];

storiesOf('Consumer/Desktop/Form Fields', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('multi-select-field', () => (
    <FieldStateProvider
      component={MultiSelectField}
      name="multi-select-field"
      label="Multi select label (pick one or more)"
      hint="Optional description text determined by merchant"
      value={[]}
      options={options}
      onChange={action('onChange')}
    />
  ));
