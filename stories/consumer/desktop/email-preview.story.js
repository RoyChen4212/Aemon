import React from 'react';
import { storiesOf } from '@storybook/react';
import { withGreyContainer, wrapStory } from '../../util/decorators';

import EmailPreview from '../../../components/consumer/desktop/email-preview';

const logos = [
  'http://pigment.github.io/fake-logos/logos/small/color/fast-banana.png',
  'http://pigment.github.io/fake-logos/logos/small/color/auto-speed.png',
  'http://pigment.github.io/fake-logos/logos/small/color/crofts-accountants.png',
];
const randomLogo = () => logos[Math.floor(Math.random() * logos.length)];

storiesOf('Consumer/Desktop/Add Contributors', module)
  .addDecorator(wrapStory)
  .addDecorator(withGreyContainer)
  .addDecorator(story => <div style={{ height: 500 }}>{story()}</div>)
  .add('email-preview', () => (
    <EmailPreview
      logo={randomLogo()}
      title="Split the cost of [Purchase Title up to two lines]"
      content="“Click through for all the details, and you can decide whether to contribute. Click through for all the details, and you can decide whether to contribute. Click through for all the details, and you can decide whether to contribute.”"
    />
  ));
