import React from 'react';
import { storiesOf } from '@storybook/react';

import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Text Styles', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('Heading 1', () => <div className="pbg-mobile-heading-1">Heading 1</div>)
  .add('Heading 2', () => <div className="pbg-mobile-heading-2">Heading 2</div>)
  .add('P', () => <div className="pbg-mobile-paragraph">Paragraph</div>)
  .add('Label/strong', () => <div className="pbg-mobile-label-strong">Label Strong</div>)
  .add('Label/clickable', () => <div className="pbg-mobile-label-link">Label Link</div>)
  .add('Label/secondary', () => <div className="pbg-mobile-label-secondary">Label Secondary</div>)
  .add('little/normal', () => <div className="pbg-mobile-small-text">Small Text</div>)
  .add('little/secondary', () => <div className="pbg-mobile-small-secondary">Small Secondary Text</div>)
  .add('hint/normal', () => <div className="pbg-mobile-hint-normal">Hint Normal</div>);
