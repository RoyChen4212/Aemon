import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from '../../../components/consumer/mobile/modal';
import { types as buttonTypes } from '../../../components/consumer/mobile/button';
import Label, { labelTypes } from '../../../components/consumer/mobile/label';
import { withGreyContainer, wrapStory, withMobileSizing } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Dashboard/Modal', module)
  .addDecorator(storyFn => <div style={{ minHeight: '600px' }}>{storyFn()}</div>)
  .addDecorator(wrapStory)
  .addDecorator(withMobileSizing)
  .addDecorator(withGreyContainer)
  .add('Standard', () => (
    <Modal
      backButtonCaption="Back"
      onBackClick={action('click')}
      title="Remove from group"
      cta={[
        {
          label: 'Cancel',
          onClick: action('click'),
          type: buttonTypes.SECONDARY,
        },
        {
          label: 'Remove 3 contributors',
          onClick: action('click'),
          type: buttonTypes.PRIMARY,
        },
      ]}
    >
      <p>
        Contributors being removed
        <Label type={labelTypes.STRONG}>Dora Grant, Simon Pague, and Ronnie Johns</Label>
      </p>
      <p>
        If you remove these contributors, they will no longer count towards your group's total, and they will not
        receive any future updates about this purchase.
      </p>
    </Modal>
  ))
  .add('Disabled CTA', () => (
    <Modal
      backButtonCaption="Back"
      onBackClick={action('click')}
      title="Remove from group"
      cta={[
        {
          label: 'Cancel',
          onClick: action('click'),
          type: buttonTypes.SECONDARY,
          disabled: true,
        },
        {
          label: 'Remove 3 contributors',
          onClick: action('click'),
          type: buttonTypes.PRIMARY,
          disabled: true,
        },
      ]}
    >
      <p>
        Contributors being removed
        <Label type={labelTypes.STRONG}>Dora Grant, Simon Pague, and Ronnie Johns</Label>
      </p>
      <p>
        If you remove these contributors, they will no longer count towards your group's total, and they will not
        receive any future updates about this purchase.
      </p>
    </Modal>
  ))
  .add('Fully functional', () => <FullModal />);

class FullModal extends React.Component {
  state = {
    showingModal: false,
  };

  get showingModal() {
    const { showingModal } = this.state;
    return showingModal;
  }

  get modal() {
    if (!this.showingModal) return null;
    return (
      <Modal
        backButtonCaption="Back"
        onBackClick={this.onBackClick}
        title="Remove from group"
        cta={[
          {
            label: 'Cancel',
            onClick: action('click'),
            type: buttonTypes.SECONDARY,
          },
          {
            label: 'Remove 3 contributors',
            onClick: action('click'),
            type: buttonTypes.PRIMARY,
          },
        ]}
      >
        <p>
          Contributors being removed
          <Label type={labelTypes.STRONG}>Dora Grant, Simon Pague, and Ronnie Johns</Label>
        </p>
        <p>
          If you remove these contributors, they will no longer count towards your group's total, and they will not
          receive any future updates about this purchase.
        </p>
      </Modal>
    );
  }

  onClick = () => {
    this.setState({ showingModal: true });
  };

  onBackClick = () => {
    this.setState({ showingModal: false });
  };

  render() {
    return (
      <div>
        {this.modal}
        <button onClick={this.onClick}>Show modal</button>
      </div>
    );
  }
}
