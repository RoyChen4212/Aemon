import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Label, { labelTypes } from '../../../components/consumer/mobile/label';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const sampleText = 'Pay By Group Rules';

storiesOf('Consumer/Mobile/Atomic Components/Label', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Standard Label', () => <Label>{sampleText}</Label>)
  .add('Required Label', () => <Label required>{sampleText}</Label>)
  .add('Active Label', () => <Label type={labelTypes.ACTIVE}>{sampleText}</Label>)
  .add('Strong Label', () => <Label type={labelTypes.STRONG}>{sampleText}</Label>)
  .add('Secondary Label', () => <Label type={labelTypes.SECONDARY}>{sampleText}</Label>)
  .add('Clickable Label', () => (
    <Label type={labelTypes.CLICKABLE} onClick={action('clicked')}>{sampleText} (Click me)</Label>
  ))
  .add('Error Label', () => <Label type={labelTypes.ERROR}>{sampleText}</Label>);
