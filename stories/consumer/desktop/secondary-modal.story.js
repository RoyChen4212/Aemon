import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SecondaryModal from '../../../components/consumer/desktop/secondary-modal';
import { PrimaryButton } from '../../../components/consumer/desktop/button';
import { withContainer } from '../../util/decorators';
import 'bootstrap/dist/css/bootstrap.css';
import '../../style.css';

storiesOf('Consumer/Desktop/Modals & Popovers/secondary-modal', module)
  .addDecorator(withContainer)
  .add('secondary-modal/icon', () => (
    <SecondaryModal title="Secondary Modal" iconType="rocket" onClose={action('click')}>
      <p>This is the content section, style it as you want.</p>
    </SecondaryModal>
  ))
  .add('secondary-modal/no-icon', () => (
    <SecondaryModal title="Secondary Modal" onClose={action('click')}>
      <p>This is the content section, style it as you want.</p>
    </SecondaryModal>
  ))
  .add('secondary-modal/working sample', () => <ModalWrapper />);

class ModalWrapper extends React.Component {
  state = { visible: false };

  showModal = () => this.setState({ visible: true });
  hideModal = () => this.setState({ visible: false });

  render() {
    return (
      <div>
        {this.state.visible && (
          <SecondaryModal title="Secondary Modal" iconType="rocket" onClose={this.hideModal}>
            <p>This is the content section, style it as you want.</p>
          </SecondaryModal>
        )}
        <div className="container">
          <div className="row">
            <PrimaryButton onClick={this.showModal}>Show modal</PrimaryButton>
          </div>
        </div>
      </div>
    );
  }
}
