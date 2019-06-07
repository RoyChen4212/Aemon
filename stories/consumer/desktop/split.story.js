import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SplitEven, SplitCustom, SplitFixed } from '../../../components/consumer/desktop/split';
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

const copyFixed = {
  split: 'Split',
  to: 'to',
  shares: 'shares for purchase',
};

const options = [{ label: { term: 'even' }, value: 'even' }, { label: { term: 'custom' }, value: 'custom' }];

const sharesSingleValue = { minShares: 6 };
const sharesRangeValue = { minShares: 6, maxShares: 10 };
const boundaries = [5, 15];

storiesOf('Consumer/Desktop/Payment Settings/split', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('split/even/option/min', () => (
    <FieldStateProvider
      component={SplitEven}
      value={{ splitType: 'even', ...sharesSingleValue }}
      boundaries={boundaries}
      copy={copy}
      options={options}
      onChange={action('change')}
      min
    />
  ))
  .add('split/even/option/range', () => (
    <FieldStateProvider
      component={SplitEven}
      value={{ splitType: 'even', ...sharesRangeValue }}
      boundaries={boundaries}
      copy={copy}
      options={options}
      onChange={action('change')}
      range
    />
  ))
  .add('split/even/locked/min', () => (
    <FieldStateProvider
      component={SplitEven}
      value={{ splitType: 'even', ...sharesSingleValue }}
      boundaries={boundaries}
      copy={copy}
      options={options}
      onChange={action('change')}
      min
      locked
    />
  ))
  .add('split/even/locked/range', () => (
    <FieldStateProvider
      component={SplitEven}
      value={{ splitType: 'even', ...sharesRangeValue }}
      boundaries={boundaries}
      copy={copy}
      options={options}
      onChange={action('change')}
      range
      locked
    />
  ))
  .add('split/custom/dropdown', () => (
    <FieldStateProvider
      component={SplitCustom}
      value={{ splitType: 'custom' }}
      copy={copy}
      options={options}
      onChange={action('change')}
      min
    />
  ))
  .add('split/custom/locked', () => (
    <FieldStateProvider
      component={SplitCustom}
      value={{ splitType: 'custom' }}
      copy={copy}
      options={options}
      onChange={action('change')}
      locked
    />
  ))
  .add('split/fixed-per-person/min', () => (
    <FieldStateProvider
      value={sharesSingleValue}
      component={SplitFixed}
      copy={copyFixed}
      boundaries={boundaries}
      onChange={action('change')}
      min
    />
  ))
  .add('split/fixed-per-person/range', () => (
    <FieldStateProvider
      value={sharesRangeValue}
      component={SplitFixed}
      copy={copyFixed}
      boundaries={boundaries}
      onChange={action('change')}
      range
    />
  ));
