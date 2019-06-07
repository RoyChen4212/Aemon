import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import { H1, H2, H3 } from '../../../components/consumer/desktop/heading';
import Label, { labelTypes } from '../../../components/consumer/desktop/label';
import Hint from '../../../components/consumer/desktop/hint';
import P from '../../../components/consumer/desktop/paragraph';
import { Ol, Ul } from '../../../components/consumer/desktop/list';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl =
  'https://www.figma.com/file/XnI28YVfYr7c83oZomUuC6qz/pbg-mobile?node-id=1%3A5577';
const sampleText = 'Pay By Group Rules';

storiesOf('Consumer/Desktop/Atomic Components/Typography', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('H1', () => <H1>{sampleText}</H1>)
  .add('H2', () => <H2>{sampleText}</H2>)
  .add('H3', () => <H3>{sampleText}</H3>)
  .add('label/normal', () => <Label>normal label</Label>)
  .add('label/strong', () => (
    <Label type={labelTypes.STRONG}>strong label</Label>
  ))
  .add('label/required', () => (
    <p className="pbg-desktop-label-normal">required label *</p>
  ))
  .add('label/link', () => <p className="pbg-desktop-label-link">link label</p>)
  .add('p', () => <P>paragraph</P>)
  .add('p/secondary', () => (
    <P>
      <span className="pbg-paragraph-secondary">paragraph</span>
    </P>
  ))
  .add('small/normal', () => <Hint>small normal</Hint>)
  .add('small/link', () => (
    <span className="pbg-consumer-desktop pbg-hint-link">small link</span>
  ))
  .add('small/error', () => (
    <span className="pbg-consumer-desktop pbg-hint-error">small error</span>
  ))
  .add('small/strong', () => (
    <span className="pbg-consumer-desktop pbg-hint-strong">small strong</span>
  ))
  .add('list/unordered', () => (
    <Ul>
      <li>Label</li>
    </Ul>
  ))
  .add('list/ordered', () => (
    <Ol>
      <li>Label</li>
    </Ol>
  ));
