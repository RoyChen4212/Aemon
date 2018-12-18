import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Hint, { types as hintTypes } from '../../../components/consumer/mobile/hint';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

const sampleText = 'Pay By Group Rules';
storiesOf('Atomic Components/Hint', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Standard', () => <Hint>{sampleText}</Hint>)
  .add('Clickable', () => (
    <Hint type={hintTypes.CLICKABLE} onClick={action('click')}>{sampleText} (Click me)</Hint>
  ))
  .add('Error', () => <Hint type={hintTypes.ERROR}>{sampleText}</Hint>)
