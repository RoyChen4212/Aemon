import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  Checkbox,
} from '../../../components/consumer/mobile/form-fields';
import FieldStateProvider from '../../util/field-state-provider';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Form Fields', module)
  .add('Checkbox', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={Checkbox}
            name="field1"
            onChange={action('change')}
          />
          <FieldStateProvider
            component={Checkbox}
            name="field1"
            value="true"
            onChange={action('change')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={Checkbox}
            name="field1"
            label="A checkbox field"
            onChange={action('change')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={Checkbox}
            label="A checked checkbox field"
            value="true"
            onChange={action('change')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={Checkbox}
            label="A checkbox field"
            onChange={action('change')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={Checkbox}
            label="A checkbox field"
            error="An error"
            onChange={action('change')}
          />
        </div>
      </div>
    </div>
  ));