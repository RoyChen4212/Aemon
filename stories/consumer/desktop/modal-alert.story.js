import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ModalAlert from '../../../components/consumer/desktop/modal-alert';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Alerts/modal-alert', module)
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
  ))
  .add('modal-alert/with-clickable-text', () => (
    <ModalAlert success title="Emphasized text." text="Clickable text elaborating on the alert." onTextClick={action('clicked')} />
  ));
