import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  HistoricalPicker
} from '../../../components/consumer/mobile/form-fields';

import '../../style.scss';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Form Fields', module)
  .add('Historical Picker', () => (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 story-wrapper">
          <HistoricalPicker
            name="picker"
            label="Label"
            hint="Select one awesome value"
            onChange={action('onChange')}
            options={[
              { label: 'Choose one', value: 'choose' },
              { label: 'First option', value: 'first' },
              { label: 'Second option', value: 'second' },
              { label: 'Super long option text here', value: 'third' },
            ]}
          />
        </div>
        <div className="col-12 story-wrapper">
          <HistoricalPicker
            name="picker"
            label="Label"
            onChange={action('onChange')}
            required
            options={[
              { label: 'Choose one', value: 'choose' },
              { label: 'First option', value: 'first' },
              { label: 'Second option', value: 'second' },
              { label: 'Super long option text here', value: 'third' },
            ]}
          />
        </div>
        <div className="col-12 story-wrapper">
          <HistoricalPicker
            name="picker"
            label="Label"
            hint="Select one awesome value"
            error="You selection is terrible"
            onChange={action('onChange')}
            options={[
              { label: 'Choose one', value: 'choose' },
              { label: 'First option', value: 'first' },
              { label: 'Second option', value: 'second' },
              { label: 'Super long option text here', value: 'third' },
            ]}
          />
        </div>
      </div>
    </div>
  ));
