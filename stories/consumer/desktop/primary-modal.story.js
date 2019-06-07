import React from 'react';
import drop from 'lodash/drop';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import PrimaryModal from '../../../components/consumer/desktop/primary-modal';
import {
  PrimaryButton,
  types as buttonTypes,
} from '../../../components/consumer/desktop/button';
import { withGreyContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl =
  'https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=877%3A10660';

storiesOf('Consumer/Desktop/Modals & Popovers', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(storyFn => (
    <div style={{ minHeight: '600px' }}>{storyFn()}</div>
  ))
  .addDecorator(wrapStory)
  .addDecorator(withGreyContainer)
  .add('primary-modal', () => (
    <PrimaryModal
      onBackClick={action('click')}
      mainContent={
        <div>
          <h2>Main content</h2>
          <p>This is the main content section, style it as you want.</p>
        </div>
      }
      sidebarContent={
        <div>
          <h2>Sidebar content</h2>
          <p>This is the sidebar content section, style it as you want.</p>
        </div>
      }
    />
  ))
  .add('primary-modal/working sample', () => <FullPrimaryModal />);

class FullPrimaryModal extends React.Component {
  state = {
    showingPrimaryModal: false,
    alerts: [],
  };

  showPrimaryModal = () => {
    this.setState({ showingPrimaryModal: true });
  };

  hidePrimaryModal = () => {
    this.setState({ showingPrimaryModal: false });
  };

  addSuccessAlert = () => {
    this.setState({
      alerts: [
        ...this.alerts,
        { type: 'success', title: 'New success.', text: 'Hey, you did it.' },
      ],
    });
  };

  addWarningAlert = () => {
    this.setState({
      alerts: [
        ...this.alerts,
        { type: 'warning', title: 'New warning.', text: "I'm warning you!" },
      ],
    });
  };

  get showingPrimaryModal() {
    return this.state.showingPrimaryModal;
  }

  get alerts() {
    return this.state.alerts;
  }

  get modal() {
    if (this.showingPrimaryModal) {
      return (
        <PrimaryModal
          onBackClick={this.hidePrimaryModal}
          mainContent={
            <div>
              <h2>Main content</h2>
              <p>This is the main content section, style it as you want.</p>
              <PrimaryButton onClick={this.addSuccessAlert}>
                Add success alert
              </PrimaryButton>
            </div>
          }
          sidebarContent={
            <div>
              <h2>Sidebar content</h2>
              <p>This is the sidebar content section, style it as you want.</p>
              <PrimaryButton onClick={this.addWarningAlert}>
                Add warning alert
              </PrimaryButton>
            </div>
          }
          alerts={this.alerts}
        />
      );
    }
  }

  render() {
    return (
      <div>
        {this.modal}
        <div className="container">
          <div className="row">
            <PrimaryButton onClick={this.showPrimaryModal}>
              Show modal
            </PrimaryButton>
          </div>
        </div>
      </div>
    );
  }
}
