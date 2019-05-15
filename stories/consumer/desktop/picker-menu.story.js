import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Picker, { PICKER_EMPTY_VALUE } from '../../../components/consumer/desktop/picker';
import PickerMenu from '../../../components/consumer/desktop/picker-menu';
import { WithFigma } from 'storybook-addon-figma';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const simpleOptions = [
  { label: { term: 'Choose one' }, value: PICKER_EMPTY_VALUE },
  { label: { term: 'First option' }, value: 'first' },
  { label: { term: 'Second option' }, value: 'second' },
  { label: { term: 'Super long option text here' }, value: 'third' },
];

const splitOptions = [
  { label: { term: 'Choose one' }, value: PICKER_EMPTY_VALUE },
  { label: { term: 'evenly', desc: 'split total cost into even shares' }, value: 'evenly' },
  { label: { term: 'custom', desc: 'vary share amounts per contributor' }, value: 'custom' },
];

storiesOf('Consumer/Desktop/Atomic Components/simple-picker-menu', module)
  .addDecorator(storyFn => <div className="position-relative">{storyFn()}</div>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('simple-picker-menu/unselected', () => (
    <PickerMenu
      options={simpleOptions}
      active
    />
  ))
  .add('simple-picker-menu/selected', () => (
    <PickerMenu
      options={simpleOptions}
      selected={simpleOptions[1].value}
      active
    />
  ));

storiesOf('Consumer/Desktop/Atomic Components/split-picker-menu', module)
  .addDecorator(storyFn => <div className="position-relative">{storyFn()}</div>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('split-picker-menu/unselected', () => (
    <PickerMenu
      options={splitOptions}
      active
    />
  ))
  .add('split-picker-menu/selected', () => (
    <PickerMenu
      options={splitOptions}
      selected={splitOptions[1].value}
      active
    />
  ));