import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PrimaryModal from '../../../components/consumer/desktop/primary-modal';
import { PrimaryButton } from '../../../components/consumer/desktop/button';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Modals & Popovers/primary-modal', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('primary-modal', () => (
    <PrimaryModal
      onClose={action('click')}
      mainContent={
        <div>
          <h2>Main content</h2>
          <p>This is the main content section, style it as you want.</p>
        </div>
      }
      sidebarContent={
        <div>
          <h2>Sidebar</h2>
          <p>This is the sidebar content section, style it as you want.</p>
        </div>
      }
      footerContent={
        <div className="container">
          <div className="row">
            <PrimaryButton onClick={action('clicked')}>Call to action</PrimaryButton>
          </div>
        </div>
      }
    />
  ))
  .add('primary-modal/no-footer', () => (
    <PrimaryModal
      onClose={action('click')}
      mainContent={
        <div>
          <h2>Main content</h2>
          <p>This is the main content section, style it as you want.</p>
        </div>
      }
      sidebarContent={
        <div>
          <h2>Sidebar</h2>
          <p>This is the sidebar content section, style it as you want.</p>
        </div>
      }
    />
  ))
  .add('primary-modal/working-sample', () => <FullPrimaryModal />);

class FullPrimaryModal extends React.Component {
  state = {
    showingPrimaryModal: false,
    alerts: [],
  };

  get showingPrimaryModal() {
    const { showingPrimaryModal } = this.state;
    return showingPrimaryModal;
  }

  get alerts() {
    const { alerts } = this.state;
    return alerts;
  }

  get modal() {
    if (!this.showingPrimaryModal) return null;
    return (
      <PrimaryModal
        onClose={this.hidePrimaryModal}
        mainContent={
          <div>
            <h2>Main content</h2>
            <p>This is the main content section, style it as you want.</p>
            <PrimaryButton onClick={this.addSuccessAlert}>Add success alert</PrimaryButton>
          </div>
        }
        sidebarContent={
          <div>
            <h2>Sidebar content</h2>
            <p>This is the sidebar content section, style it as you want.</p>
            <PrimaryButton onClick={this.addWarningAlert}>Add warning alert</PrimaryButton>
          </div>
        }
        footerContent={<p style={{ textAlign: 'center' }}>This is the footer content section, style it as you want.</p>}
        alerts={this.alerts}
      />
    );
  }

  showPrimaryModal = () => {
    this.setState({ showingPrimaryModal: true });
  };

  hidePrimaryModal = () => {
    this.setState({ showingPrimaryModal: false });
  };

  addSuccessAlert = () => {
    this.setState({
      alerts: [...this.alerts, { type: 'success', title: 'New success.', text: 'Hey, you did it.' }],
    });
  };

  addWarningAlert = () => {
    this.setState({
      alerts: [...this.alerts, { type: 'warning', title: 'New warning.', text: "I'm warning you!" }],
    });
  };

  render() {
    return (
      <div>
        {this.modal}
        <div className="container">
          <div className="row">
            <PrimaryButton onClick={this.showPrimaryModal}>Show modal</PrimaryButton>
          </div>
        </div>
      </div>
    );
  }
}
