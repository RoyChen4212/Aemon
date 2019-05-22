import React from 'react';
import { storiesOf } from '@storybook/react';
import { SplitEven } from '../../../components/consumer/desktop/split'
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const copy = {
  split: 'Split',
  across: 'across',
  to: 'to',
  shares: 'shares',
};

const options = [
  { label: {term: 'even'}, value: 'even' },
  { label: {term: 'custom'}, value: 'custom' },
];

storiesOf('Consumer/Desktop/Payment Settings/split', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('split-even/min', () => (
    <FieldStateProvider
      component={SplitEven}
      value={{splitType: 'even'}}
      copy={copy}
      options={options}
      min 
    />)
  )
  .add('split-even/min/locked', () => (
    <FieldStateProvider
      component={SplitEven}
      value={{splitType: 'even'}}
      copy={copy}
      options={options} 
      min locked
    />)
  )
  .add('split-even/range', () => (
    <FieldStateProvider
      component={SplitEven}
      value={{splitType: 'even'}}
      copy={copy}
      options={options}
      range />
    )
  );