import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  DatePicker,
} from '../../../components/consumer/mobile/form-fields';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

const customFormater = (date) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return date.toLocaleDateString('de-DE', options);
};

storiesOf('Form Fields', module)
  .add('Date Picker', () => (
    <div className="container-fluid">
    <div className="row">
        <div className="col-12 story-wrapper">
          <DatePicker
            name="date-picker"
            value={new Date()}
            hint="With no label"
            onChange={action('onChange')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <DatePicker
            name="date-picker"
            label="With no value"
            hint="Pick a date"
            onChange={action('onChange')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <DatePicker
            name="date-picker"
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
          <DatePicker
            name="date-picker"
            label="With custom formater"
            hint="Pick a date"
            value={new Date('October 19, 1984')}
            formater={customFormater}
            onChange={action('onChange')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <DatePicker
            name="date-picker"
            label="With error"
            hint="Pick a date"
            error="Terrible error here"
            onChange={action('onChange')}
          />
        </div>
      </div>
    </div>
  ));
