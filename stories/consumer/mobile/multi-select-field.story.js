import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { MultiSelectField } from '../../../components/consumer/mobile/multi-select-field';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const options = [
  { label: 'Vietnamese Pho', value: 'viet' },
  { label: 'Mexican Tacos', value: 'mex' },
  { label: 'Italian Calzone', value: 'calzone' },
  { label: 'European Goulash', value: 'goulash' },
];

const figmaUrl = 'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=7%3A8';
storiesOf('Consumer/Mobile/Form Fields/Multi Select Field', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Default', () => (
    <FieldStateProvider
      component={MultiSelectField}
      name="multi-select-field"
      label="Choose your favorite food"
      hint="pick as many as you want"
      value={[]}
      options={options}
      onChange={action('onChange')}
    />
  ));
