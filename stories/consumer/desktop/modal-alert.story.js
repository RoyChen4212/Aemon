import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ModalAlert from '../../../components/consumer/desktop/modal-alert';
import { withContainer, wrapStory, withMobileSizing } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Alerts/ModalAlert', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .addDecorator(story => <div style={{ width: '500px' }}>{story()}</div>)
  .add('modal-alert/error', () => (
    <ModalAlert error title="Emphasized text." text="Further text elaborating on the alert." />
  ))
  .add('modal-alert/warning', () => (
    <ModalAlert warning title="Emphasized text." text="Further text elaborating on the alert." />
  ))
  .add('modal-alert/success', () => (
    <ModalAlert success title="Emphasized text." text="Further text elaborating on the alert." />
  ));
