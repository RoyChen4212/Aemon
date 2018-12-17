import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { LinkButton } from '../../../components/consumer/mobile/button';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Atomic Components', module)
  .add('Link button', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 story-wrapper">
          <LinkButton onClick={action('clicked')}>Link Button</LinkButton>
        </div>
        <div className="col-12 story-wrapper">
          <LinkButton disabled onClick={action('clicked')}>Link Button Disabled</LinkButton>
        </div>
        <div className="col-12 story-wrapper">
          <LinkButton hint="With Hint" onClick={action('clicked')}>Link Button</LinkButton>
        </div>
      </div>
    </div>
  ));
