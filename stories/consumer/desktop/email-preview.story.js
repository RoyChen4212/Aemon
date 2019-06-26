import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithFigma } from 'storybook-addon-figma';
import { withGreyContainer, wrapStory } from '../../util/decorators';

import EmailPreview from '../../../components/consumer/desktop/email-preview';

const figmaUrl = 'https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=1736%3A25535';

const logos = [
  'http://pigment.github.io/fake-logos/logos/small/color/fast-banana.png',
  'http://pigment.github.io/fake-logos/logos/small/color/auto-speed.png',
  'http://pigment.github.io/fake-logos/logos/small/color/crofts-accountants.png',
];
const randomLogo = () => logos[Math.floor(Math.random() * logos.length)];

storiesOf('Consumer/Desktop/Add Contributors/email-preview', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(wrapStory)
  .addDecorator(withGreyContainer)
  .addDecorator(story => <div style={{ height: 500 }}>{story()}</div>)
  .add('email-preview/default', () => (
    <EmailPreview
      logo={randomLogo()}
      title="Split the cost of [Purchase Title]"
      content="“Click through for all the details, and you can decide whether to contribute. Click through for all the details, and you can decide whether to contribute. Click through for all the details, and you can decide whether to contribute.”"
    />
  ));
