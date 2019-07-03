import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import FacebookInput from '../../../components/consumer/desktop/facebook-input';

import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Form Fields/facebook-input', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('default', () => <FacebookInput onClick={action('clicked')} />);
