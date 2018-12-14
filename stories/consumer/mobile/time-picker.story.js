import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  TimePicker,
} from '../../../components/consumer/mobile/form-fields';
import FieldStateProvider from '../../util/field-state-provider';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

const customFormater = () => 'Formated by custom formater';

storiesOf('Form Fields', module)
  .add('Time Picker', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={TimePicker}
            name="time-picker"
            value="12:32"
            hint="With no label"
            onChange={action('onChange')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={TimePicker}
            name="time-picker"
            label="With no value"
            value=""
            hint="Pick a time"
            onChange={action('onChange')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={TimePicker}
            name="time-picker"
            label="With value"
            hint="And required"
            required
            value="11:40"
            onChange={action('onChange')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={TimePicker}
            name="time-picker"
            label="With custom formater"
            hint="Pick a time"
            value="10:00"
            formater={customFormater}
            onChange={action('onChange')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={TimePicker}
            name="time-picker"
            label="With error"
            hint="Pick a time"
            error="Terrible error here"
            value="10:10"
            onChange={action('onChange')}
          />
        </div>
      </div>
    </div>
  ));
