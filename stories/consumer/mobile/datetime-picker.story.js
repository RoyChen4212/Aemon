import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  DatetimePicker,
} from '../../../components/consumer/mobile/form-fields';
import FieldStateProvider from '../../util/field-state-provider';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Form Fields', module)
  .add('Date Time Picker', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={DatetimePicker}
            label="With no value"
            name="date-picker"
            timezone="America/Mexico_City"
            onChange={action('onChange')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={DatetimePicker}
            name="date-picker"
            value={new Date()}
            hint="With no label"
            timezone="America/Mexico_City"
            onChange={action('onChange')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={DatetimePicker}
            name="date-picker"
            value={new Date()}
            label="Label"
            hint="Pick a date and a time"
            timezone="America/Mexico_City"
            onChange={action('onChange')}
          />
        </div>
      </div>
    </div>
  ));
