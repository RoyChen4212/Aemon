import React from 'react';
import { storiesOf } from '@storybook/react';
import { withContainer, wrapStory } from '../../util/decorators';

import ModalBranding from '../../../components/consumer/desktop/modal-branding';
import Hint from '../../../components/consumer/desktop/hint';
import Picker from '../../../components/consumer/desktop/picker';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const logos = [
  'http://pigment.github.io/fake-logos/logos/small/color/greens-food-suppliers.png',
  'http://pigment.github.io/fake-logos/logos/small/color/auto-speed.png',
  'http://pigment.github.io/fake-logos/logos/small/color/crofts-accountants.png',
  'http://pigment.github.io/fake-logos/logos/small/color/cheshire-county-hygiene-services.png',
  'http://pigment.github.io/fake-logos/logos/small/color/fast-banana.png',
  'http://pigment.github.io/fake-logos/logos/small/color/yoga-baby.png',
  'http://pigment.github.io/fake-logos/logos/small/color/james-and-sons.png',
  'http://pigment.github.io/fake-logos/logos/small/color/the-dance-studio.png',
  'http://pigment.github.io/fake-logos/logos/small/color/space-cube.png',
  'http://pigment.github.io/fake-logos/logos/small/color/baby-swim.png',
  'http://pigment.github.io/fake-logos/logos/small/color/beauty-box.png',
  'http://pigment.github.io/fake-logos/logos/small/color/the-web-works.png',
  'http://pigment.github.io/fake-logos/logos/small/color/petes-blinds.png',
];

const randomLogo = () => logos[Math.floor(Math.random()*logos.length)];

storiesOf('Consumer/Desktop/Info/branding', module)
  .add('modal-branding/default', () => (
    <ModalBranding
      logo={randomLogo()}/>
  ))
  .add('modal-branding/claim', () => (
    <ModalBranding
      logo={randomLogo()}>
      <Hint>
        <a className="pbg-hint-link" href="">How does it work?</a>
      </Hint>
    </ModalBranding>
  ));
