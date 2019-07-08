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
  .add('pbg-mobile-paragraph', () => <div className="pbg-mobile-paragraph">Paragraph</div>)
  .add('pbg-mobile-label-strong', () => <div className="pbg-mobile-label-strong">Label Strong</div>)
  .add('pbg-mobile-label-link', () => <div className="pbg-mobile-label-link">Label Link</div>)
  .add('pbg-mobile-label-secondary', () => <div className="pbg-mobile-label-secondary">Label Secondary</div>)
  .add('pbg-mobile-small-text', () => <div className="pbg-mobile-small-text">Small Text</div>)
  .add('pbg-mobile-small-secondary', () => <div className="pbg-mobile-small-secondary">Small Secondary Text</div>)
  .add('pbg-mobile-hint-normal', () => <div className="pbg-mobile-hint-normal">Hint Normal</div>);
