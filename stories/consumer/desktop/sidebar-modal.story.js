import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';
import SidebarModal from '../../../components/consumer/desktop/sidebar-modal';
import { types as buttonTypes } from '../../../components/consumer/mobile/button';
import Label, { labelTypes } from '../../../components/consumer/mobile/label';
import { withGreyContainer, wrapStory } from '../../util/decorators';
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const figmaUrl = 'https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=877%3A10660';

storiesOf('Consumer/Desktop/SidebarModal', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(storyFn => <div style={{minHeight: '600px'}}>{storyFn()}</div>)
  .addDecorator(wrapStory)
  .addDecorator(withGreyContainer)
  .add('Standard', () => (
    <SidebarModal
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
  .add('Fully functional', () => (<FullSidebarModal />));

class FullSidebarModal extends React.Component {
  state = {
    showingSidebarModal: false,
  }

  showSidebarModal = () => {
    this.setState({ showingSidebarModal: true });
  }

  hideSidebarModal = () => {
    this.setState({ showingSidebarModal: false });
  }

  get showingSidebarModal() {
    return this.state.showingSidebarModal;
  }

  get modal() {
    if (this.showingSidebarModal) {
      return (
        <SidebarModal
          onBackClick={this.hideSidebarModal}
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
        <button onClick={this.showSidebarModal}>Show modal</button>
      </div>
    );
  }
}