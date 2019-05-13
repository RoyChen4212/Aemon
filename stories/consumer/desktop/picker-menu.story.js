import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Picker, { PICKER_EMPTY_VALUE } from '../../../components/consumer/desktop/picker';
import PickerMenu from '../../../components/consumer/desktop/picker-menu';
import { WithFigma } from 'storybook-addon-figma';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const options = [
  { label: 'Choose one', value: PICKER_EMPTY_VALUE },
  { label: 'First option', value: 'first' },
  { label: 'Second option', value: 'second' },
  { label: 'Super long option text here', value: 'third' },
];

storiesOf('Consumer/Desktop/Atomic Components/simple-picker-menu', module)
  .addDecorator(storyFn => <div className="position-relative">{storyFn()}</div>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('simple-picker-menu/default', () => (
    <PickerMenu
      options={options}
      active
    />
  ))
  .add('simple-picker-menu/selected', () => (
    <PickerMenu
      options={options}
      selected={options[1].value}
      active
    />
  ));