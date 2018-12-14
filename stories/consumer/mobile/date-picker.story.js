import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  DatePicker,
} from '../../../components/consumer/mobile/form-fields';
import FieldStateProvider from '../../util/field-state-provider';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

const customFormater = (dateStr) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(dateStr);
  return date.toLocaleDateString('de-DE', options);
};

storiesOf('Form Fields', module)
  .add('Date Picker', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 story-wrapper">
            <FieldStateProvider
              component={DatePicker}
              name="date-picker"
              value={new Date()}
              hint="With no label"
              onChange={action('onChange')}
            />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={DatePicker}
            name="date-picker"
            label="With no value"
            hint="Pick a date"
            onChange={action('onChange')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={DatePicker}
            name="date-picker"
            label="With value"
            hint="And required"
            required
            value="1984-10-19"
            onChange={action('onChange')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={DatePicker}
            name="date-picker"
            label="With custom formater"
            hint="Pick a date"
            value="1984-10-19"
            formater={customFormater}
            onChange={action('onChange')}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 story-wrapper">
          <FieldStateProvider
            component={DatePicker}
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
