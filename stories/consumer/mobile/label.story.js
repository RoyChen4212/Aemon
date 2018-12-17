import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Label, { types as labelTypes } from '../../../components/consumer/mobile/label';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Atomic Components', module)
  .add('Label', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Label>Normal Label</Label>
        </div>
        <div className="col-12">
          <Label required>Required Label</Label>
        </div>
        <div className="col-12">
          <Label type={labelTypes.ACTIVE}>Active Label</Label>
        </div>
        <div className="col-12">
          <Label type={labelTypes.STRONG}>I am a strong label</Label>
        </div>
        <div className="col-12">
          <Label type={labelTypes.SECONDARY}>I am a secondary label</Label>
        </div>
        <div className="col-12">
          <Label type={labelTypes.CLICKABLE} onClick={action('clicked')}>Click me</Label>
        </div>
        <div className="col-12">
          <Label type={labelTypes.ERROR}>Error label</Label>
        </div>
      </div>
    </div>
  ));
