import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const sampleText = 'Pay By Group Rules';

storiesOf('Consumer/Desktop/Atomic Components/Typography', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('heading-1', () => <h1 className="pbg-consumer-desktop pbg-desktop-heading-1">{sampleText}</h1>)
  .add('heading-2', () => <h2 className="pbg-consumer-desktop pbg-desktop-heading-2">{sampleText}</h2>)
  .add('heading-3', () => <h3 className="pbg-consumer-desktop pbg-desktop-heading-3">{sampleText}</h3>)
  .add('label/normal', () => <span className="pbg-consumer-desktop pbg-desktop-label-normal">normal label</span>)
  .add('label/strong', () => <span className="pbg-consumer-desktop pbg-desktop-label-strong">strong label</span>)
  .add('label/required', () => <span className="pbg-consumer-desktop pbg-desktop-label-normal">required label *</span>)
  .add('label/link', () => <span className="pbg-consumer-desktop pbg-desktop-label-link">link label</span>)
  .add('label/error', () => <span className="pbg-consumer-desktop pbg-desktop-label-error">error label</span>)
  .add('p', () => <p className="pbg-consumer-desktop pbg-desktop-paragraph">paragraph</p>)
  .add('p/secondary', () => <p className="pbg-consumer-desktop pbg-desktop-paragraph-secondary">paragraph secondary</p>)
  .add('small/normal', () => <span className="pbg-consumer-desktop pbg-desktop-small-text">small normal</span>)
  .add('small/link', () => <span className="pbg-consumer-desktop pbg-desktop-small-link">small link</span>)
  .add('small/error', () => <span className="pbg-consumer-desktop pbg-desktop-small-error">small error</span>)
  .add('small/strong', () => <span className="pbg-consumer-desktop pbg-desktop-small-strong">small strong</span>)
  .add('list/unordered', () => (
    <ul className="pbg-consumer-desktop pbg-desktop-list-unordered">
      <li>Label</li>
    </ul>
  ))
  .add('list/ordered', () => (
    <ol className="pbg-consumer-desktop pbg-desktop-list-ordered">
      <li>Label</li>
    </ol>
  ));
