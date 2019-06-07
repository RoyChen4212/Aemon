import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { TextField } from '../../../components/consumer/mobile/form-fields';
import FieldStateProvider from '../../util/field-state-provider';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=7%3A8';
storiesOf('Consumer/Mobile/Form Fields/Text Field', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Valid', () => <FieldStateProvider component={TextField} name="field1" label="A text field" />)
  .add('Valid/With value', () => (
    <FieldStateProvider
      component={TextField}
      name="field1"
      onChange={action('change')}
      value="You typed this"
      label="A text field"
    />
  ))
  .add('Valid/With Hint', () => <TextField name="field2" label="A text field" hint="with a hint" />)
  .add('Valid/Required', () => <TextField name="field2" label="A required text field" hint="with a hint" required />)
  .add('Invalid', () => (
    <FieldStateProvider
      component={TextField}
      name="field3"
      label="A text field"
      onChange={action('change')}
      value="What you typed is wrong"
      error="this is an error"
    />
  ));
