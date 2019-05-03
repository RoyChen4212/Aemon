import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import PrimaryModal from '../../../components/consumer/desktop/primary-modal';
import { types as buttonTypes } from '../../../components/consumer/mobile/button';
import Label, { labelTypes } from '../../../components/consumer/mobile/label';
import { withGreyContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=877%3A10660';

storiesOf('Consumer/Desktop/PrimaryModal', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(storyFn => <div style={{minHeight: '600px'}}>{storyFn()}</div>)
  .addDecorator(wrapStory)
  .addDecorator(withGreyContainer)
  .add('Standard', () => (
    <PrimaryModal
      onBackClick={action('click')}
      mainContent={(
        <div>
          <h2>Main content</h2>
          <p>This is the main content section, style it as you want.</p>
        </div>
      )}
      sidebarContent={(
        <div>
          <h2>Sidebar content</h2>
          <p>This is the sidebar content section, style it as you want.</p>
        </div>
      )}
    />
  ))
  .add('Fully functional', () => (<FullPrimaryModal />));

class FullPrimaryModal extends React.Component {
  state = {
    showingPrimaryModal: false,
  }

  showPrimaryModal = () => {
    this.setState({ showingPrimaryModal: true });
  }

  hidePrimaryModal = () => {
    this.setState({ showingPrimaryModal: false });
  }

  get showingPrimaryModal() {
    return this.state.showingPrimaryModal;
  }

  get modal() {
    if (this.showingPrimaryModal) {
      return (
        <PrimaryModal
          onBackClick={this.hidePrimaryModal}
          mainContent={(
            <div>
              <h2>Main content</h2>
              <p>This is the main content section, style it as you want.</p>
            </div>
          )}
          sidebarContent={(
            <div>
              <h2>Sidebar content</h2>
              <p>This is the sidebar content section, style it as you want.</p>
            </div>
          )}
        />
      )
    }
  }

  render() {
    return (
      <div>
        {this.modal}
        <button onClick={this.showPrimaryModal}>Show modal</button>
      </div>
    );
  }
}