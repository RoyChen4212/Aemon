import React from 'react';
import { storiesOf } from '@storybook/react';

import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Atomic Components/Typography', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('pbg-mobile-heading-1', () => <div className="pbg-mobile-heading-1">Heading 1</div>)
  .add('pbg-mobile-heading-2', () => <div className="pbg-mobile-heading-2">Heading 2</div>)
  .add('pbg-mobile-heading-3', () => <div className="pbg-mobile-heading-3">Heading 3</div>)
  .add('pbg-mobile-label-normal', () => <div className="pbg-mobile-label-normal">Label Normal</div>)
  .add('pbg-mobile-label-strong', () => <div className="pbg-mobile-label-strong">Label Strong</div>)
  .add('pbg-mobile-label-link', () => <div className="pbg-mobile-label-link">Label Link</div>)
  .add('pbg-mobile-label-secondary', () => <div className="pbg-mobile-label-secondary">Label Secondary</div>)
  .add('pbg-mobile-paragraph', () => <div className="pbg-mobile-paragraph">Paragraph</div>)
  .add('pbg-mobile-paragraph-error', () => <div className="pbg-mobile-paragraph-error">Paragraph Error</div>)
  .add('pbg-mobile-small-normal', () => <div className="pbg-mobile-small-normal">Small Normal</div>)
  .add('pbg-mobile-small-error', () => <div className="pbg-mobile-small-error">Small Error</div>)
  .add('pbg-mobile-small-link', () => <div className="pbg-mobile-small-link">Small Link</div>)
  .add('pbg-mobile-small-text', () => <div className="pbg-mobile-small-text">Small Text</div>)
  .add('pbg-mobile-small-secondary', () => <div className="pbg-mobile-small-secondary">Small Secondary Text</div>)
  .add('pbg-mobile-hint-normal', () => <div className="pbg-mobile-hint-normal">Hint Normal</div>)
  .add('pbg-mobile-hint-error', () => <div className="pbg-mobile-hint-error">Hint Error</div>)
  .add('pbg-mobile-hint-clickable', () => <div className="pbg-mobile-hint-clickable">Hint Clickable</div>)
  .add('pbg-mobile-list-unordered', () => (
    <ul className="pbg-consumer-mobile pbg-mobile-list-unordered">
      <li>Label</li>
    </ul>
  ))
  .add('pbg-mobile-list-ordered', () => (
    <ol className="pbg-consumer-mobile pbg-mobile-list-ordered">
      <li>Label</li>
    </ol>
  ));
