import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Hint, { hintTypes } from '../../../components/consumer/mobile/hint';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const sampleText = 'Pay By Group Rules';

storiesOf('Consumer/Mobile/Atomic Components/hint', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('hint/default', () => <Hint>{sampleText}</Hint>)
  .add('hint/link', () => (
    <Hint type={hintTypes.CLICKABLE} onClick={action('click')}>
      {sampleText} (Click me)
    </Hint>
  ))
  .add('hint/error', () => <Hint type={hintTypes.ERROR}>{sampleText}</Hint>);
