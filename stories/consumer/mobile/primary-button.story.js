import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { PrimaryButton } from '../../../components/consumer/mobile/button';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Atomic Components', module)
  .add('Primary button', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 story-wrapper">
          <PrimaryButton onClick={action('clicked')}>Primary Button</PrimaryButton>
        </div>
        <div className="col-12 story-wrapper">
          <PrimaryButton disabled onClick={action('clicked')}>Primary Button Disabled</PrimaryButton>
        </div>
        <div className="col-12 story-wrapper">
          <PrimaryButton hint="With Hint" onClick={action('clicked')}>Primary Button</PrimaryButton>
        </div>
      </div>
    </div>
  ));
