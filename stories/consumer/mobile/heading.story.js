import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { H1, H2, H3 } from '../../../components/consumer/mobile/heading';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Atomic Components', module)
  .add('Heading', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
        </div>
      </div>
    </div>
  ));
