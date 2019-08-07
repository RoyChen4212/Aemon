import React from 'react';
import { storiesOf } from '@storybook/react';

import { withContainer, wrapStory, withMiddleSizing } from '../../util/decorators';
import ExpandableSection from '../../../components/consumer/mobile/expandable-section';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Section Components/expandable-section', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(withMiddleSizing)
  .add('expandable-section/compact', () => (
    <ExpandableSection title="Label" hint="Secondary Text" showText="Show more" hideText="Hide">
      My Awesome Content
    </ExpandableSection>
  ))
  .add('expandable-section/expanded', () => (
    <ExpandableSection defaultExpanded title="Label" hint="Secondary Text" showText="Show more" hideText="Hide">
      My Awesome Content
    </ExpandableSection>
  ));
