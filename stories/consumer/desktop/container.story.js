import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithFigma } from 'storybook-addon-figma';
import Container from '../../../components/consumer/desktop/container';
import { withGreyContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=90%3A5';

const spacer = <div style={{ width: '300px', height: '60px' }} />;
storiesOf('Consumer/Desktop/Atomic Components/Container', module)
  .addDecorator(wrapStory)
  .addDecorator(withGreyContainer)
  .add('container/solid', () => <Container solid>{spacer}</Container>)
  .add('container/solid shadow 1', () => (
    <Container solid shadow1>
      {spacer}
    </Container>
  ))
  .add('container/solid shadow 2', () => (
    <Container solid shadow2>
      {spacer}
    </Container>
  ))
  .add('container/stroked', () => <Container stroked>{spacer}</Container>)
  .add('container/stroked solid', () => (
    <Container solid stroked>
      {spacer}
    </Container>
  ))
  .add('container/stroked solid shadow 2', () => (
    <Container solid stroked shadow1>
      {spacer}
    </Container>
  ));
