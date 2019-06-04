import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withContainer, wrapStory } from '../../util/decorators';
import FieldStateProvider from '../../util/field-state-provider';

import ModalBranding from '../../../components/consumer/desktop/modal-branding';
import Hint from '../../../components/consumer/desktop/hint';
import Picker, { PICKER_EMPTY_VALUE } from '../../../components/consumer/desktop/picker';

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
const options = [
  {label: { term: 'English'}, value: 'en'},
  {label: { term: 'Danish'}, value: 'da'},
  {label: { term: 'French'}, value: 'fr'},
  {label: { term: 'Spanish'}, value: 'es'},
];
const footer = (
  <div style={{padding: '8px 10px 0 0'}}>
    <a style={{float: 'left'}} className="pbg-desktop-small-link" href="">
      How does it work?
    </a>
    <div style={{float: 'right'}}>
      <FieldStateProvider
        component={Picker}
        name="picker"
        value="en"
        options={options}
        simple
        onChange={action('change')}
      />
    </div>
  </div>
);

storiesOf('Consumer/Desktop/Info/branding', module)
  .add('modal-branding/default', () => (
    <ModalBranding logo={randomLogo()}/>
  ))
  .add('modal-branding/claim', () => (
    <ModalBranding logo={randomLogo()}>{footer}</ModalBranding>
  ));
