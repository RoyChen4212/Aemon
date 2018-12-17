import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Hint, { types as hintTypes } from '../../../components/consumer/mobile/hint';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Atomic Components', module)
  .add('Hint', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12"><Hint>Hint</Hint></div>
        <div className="col-12"><Hint type={hintTypes.ERROR}>Error</Hint></div>
        <div className="col-12">
          <Hint type={hintTypes.CLICKABLE} onClick={action('click')}>Click me</Hint>
        </div>
      </div>
    </div>
  ));
