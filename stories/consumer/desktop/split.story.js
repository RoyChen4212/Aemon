import React from 'react';
import { storiesOf } from '@storybook/react';
import { SplitEven, SplitCustom } from '../../../components/consumer/desktop/split'
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const copy = {
  split: 'Split',
  across: 'across',
  to: 'to',
  shares: 'shares',
  for: 'for different amounts per contributor',
};

const options = [
  { label: {term: 'even'}, value: 'even' },
  { label: {term: 'custom'}, value: 'custom' },
];

storiesOf('Consumer/Desktop/Payment Settings/split', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('split/even/option/min', () => (
    <FieldStateProvider
      component={SplitEven}
      value={{splitType: 'even'}}
      copy={copy}
      options={options}
      min 
    />)
  )
  .add('split/even/option/range', () => (
    <FieldStateProvider
      component={SplitEven}
      value={{splitType: 'even'}}
      copy={copy}
      options={options}
      range />
    )
  )
  .add('split/even/locked/min', () => (
    <FieldStateProvider
      component={SplitEven}
      value={{splitType: 'even'}}
      copy={copy}
      options={options} 
      min locked
    />)
  )
  .add('split/even/locked/range', () => (
    <FieldStateProvider
      component={SplitEven}
      value={{splitType: 'even'}}
      copy={copy}
      options={options} 
      range locked
    />)
  )
  .add('split/custom/dropdown', () => (
    <FieldStateProvider
      component={SplitCustom}
      value={{splitType: 'custom'}}
      copy={copy}
      options={options}
      min 
    />)
  )
  .add('split/custom/locked', () => (
    <FieldStateProvider
      component={SplitCustom}
      value={{splitType: 'custom'}}
      copy={copy}
      options={options} 
      locked
    />)
  );