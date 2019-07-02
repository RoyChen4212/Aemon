import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Label, { labelTypes } from '../../../components/consumer/mobile/label';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const sampleText = 'Pay By Group Rules';

storiesOf('Consumer/Mobile/Atomic Components/label', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('label', () => <Label>{sampleText}</Label>)
  .add('label/required', () => <Label required>{sampleText}</Label>)
  .add('label/clickable', () => <Label type={labelTypes.ACTIVE}>{sampleText}</Label>)
  .add('label/strong', () => <Label type={labelTypes.STRONG}>{sampleText}</Label>)
  .add('label/secondary', () => <Label type={labelTypes.SECONDARY}>{sampleText}</Label>)
  .add('label/error', () => <Label type={labelTypes.ERROR}>{sampleText}</Label>);
