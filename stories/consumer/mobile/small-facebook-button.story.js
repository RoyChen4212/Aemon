import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SmallFacebookButton } from '../../../components/consumer/mobile/button';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Atomic Components', module)
  .add('Small Facebook Button', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 story-wrapper">
          <SmallFacebookButton onClick={action('clicked')}>Small Facebook Button</SmallFacebookButton>
        </div>
        <div className="col-12 story-wrapper">
          <SmallFacebookButton disabled onClick={action('clicked')}>Small Facebook Button Disabled</SmallFacebookButton>
        </div>
        <div className="col-12 story-wrapper">
          <SmallFacebookButton hint="With Hint" onClick={action('clicked')}>Small Facebook Button</SmallFacebookButton>
        </div>
      </div>
    </div>
  ));
