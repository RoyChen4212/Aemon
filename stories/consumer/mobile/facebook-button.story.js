import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FacebookButton } from '../../../components/consumer/mobile/button';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Atomic Components', module)
  .add('Facebook button', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 story-wrapper">
          <FacebookButton onClick={action('clicked')}>Facebook Button</FacebookButton>
        </div>
        <div className="col-12 story-wrapper">
          <FacebookButton disabled onClick={action('clicked')}>Facebook Button Disabled</FacebookButton>
        </div>
        <div className="col-12 story-wrapper">
          <FacebookButton hint="With Hint" onClick={action('clicked')}>Facebook Button</FacebookButton>
        </div>
      </div>
    </div>
  ));