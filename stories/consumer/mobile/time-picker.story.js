import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  TimePicker,
} from '../../../components/consumer/mobile/form-fields';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

const customFormater = () => 'Formated by custom formater';

storiesOf('Form Fields', module)
  .add('Time Picker', () => (
    <div className="container-fluid">
    <div className="row">
        <div className="col-12 story-wrapper">
          <TimePicker
            name="time-picker"
            value={new Date()}
            hint="With no label"
            onChange={action('onChange')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <TimePicker
            name="time-picker"
            label="With no value"
            hint="Pick a time"
            onChange={action('onChange')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <TimePicker
            name="time-picker"
            label="With value"
            hint="And required"
            required
            value={new Date('October 19, 1984')}
            onChange={action('onChange')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <TimePicker
            name="time-picker"
            label="With custom formater"
            hint="Pick a time"
            value={new Date('October 19, 1984')}
            formater={customFormater}
            onChange={action('onChange')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <TimePicker
            name="time-picker"
            label="With error"
            hint="Pick a time"
            error="Terrible error here"
            onChange={action('onChange')}
          />
        </div>
      </div>
    </div>
  ));
