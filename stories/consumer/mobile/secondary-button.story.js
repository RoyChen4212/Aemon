import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SecondaryButton } from '../../../components/consumer/mobile/button';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Atomic Components', module)
  .add('Secondary button', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 story-wrapper">
          <SecondaryButton onClick={action('clicked')}>Secondary Button</SecondaryButton>
        </div>
        <div className="col-12 story-wrapper">
          <SecondaryButton disabled onClick={action('clicked')}>Secondary Button Disabled</SecondaryButton>
        </div>
        <div className="col-12 story-wrapper">
          <SecondaryButton hint="With Hint" onClick={action('clicked')}>Secondary Button</SecondaryButton>
        </div>
      </div>
    </div>
  ));
