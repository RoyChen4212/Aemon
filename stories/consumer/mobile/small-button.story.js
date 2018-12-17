import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SmallButton } from '../../../components/consumer/mobile/button';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Atomic Components', module)
  .add('Small button', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 story-wrapper">
            <SmallButton onClick={action('clicked')}>Small Button</SmallButton>
          </div>
          <div className="col-12 story-wrapper">
            <SmallButton disabled onClick={action('clicked')}>Small Button Disabled</SmallButton>
          </div>
          <div className="col-12 story-wrapper">
            <SmallButton hint="With Hint" onClick={action('clicked')}>Small Button</SmallButton>
          </div>
      </div>
    </div>
  ));
