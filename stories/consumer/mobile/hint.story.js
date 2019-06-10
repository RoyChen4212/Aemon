import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import Hint, { hintTypes } from '../../../components/consumer/mobile/hint';
import { withContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const sampleText = 'Pay By Group Rules';
const figmaUrl = 'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=1%3A5577';
storiesOf('Consumer/Mobile/Atomic Components/Hint', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Standard', () => <Hint>{sampleText}</Hint>)
  .add('Clickable', () => (
    <Hint type={hintTypes.CLICKABLE} onClick={action('click')}>
      {sampleText} (Click me)
    </Hint>
  ))
  .add('Error', () => <Hint type={hintTypes.ERROR}>{sampleText}</Hint>);
