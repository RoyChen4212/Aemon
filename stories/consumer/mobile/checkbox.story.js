import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Checkbox,
} from '../../../components/consumer/mobile/form-fields';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Form Fields', module)
  .add('Checkbox', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 story-wrapper">
          <Checkbox
            name="field1"
            label="A checkbox field"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <Checkbox
            name="field1"
            label="A checkbox field"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <Checkbox
            name="field1"
            label="A checkbox field"
            error="An error"
          />
        </div>
      </div>
    </div>
  ));