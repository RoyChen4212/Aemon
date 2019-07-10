import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Alert from '../../../components/consumer/mobile/alert';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Alerts/alert', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(story => <div style={{ width: '500px' }}>{story()}</div>)
  .add('alert/success', () => (
    <Alert
      success
      title="Success alert label"
      text="Secondary alert text to further expand on the alert label above."
      onCallToAction={action('onCallToAction')}
      onCloseClick={action('onCloseClick')}
    />
  ))
  .add('alert/warning', () => (
    <Alert
      warning
      title="Warning alert label"
      text="Secondary alert text to further expand on the alert label above."
      onCallToAction={action('onCallToAction')}
      onCloseClick={action('onCloseClick')}
    />
  ))
  .add('alert/error', () => (
    <Alert
      success
      title="Error alert label"
      text="Secondary alert text to further expand on the alert label above."
      onCallToAction={action('onCallToAction')}
      onCloseClick={action('onCloseClick')}
    />
  ));
