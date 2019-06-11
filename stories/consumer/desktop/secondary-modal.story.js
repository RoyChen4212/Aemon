import React from 'react';
import drop from 'lodash/drop';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithFigma } from 'storybook-addon-figma';

import SecondaryModal from '../../../components/consumer/desktop/secondary-modal';
import { PrimaryButton } from '../../../components/consumer/desktop/button';
import { H2 } from '../../../components/consumer/desktop/heading';
import { withContainer } from '../../util/decorators';
import 'bootstrap/dist/css/bootstrap.css';
import '../../style.css';

const figmaUrl =
  'https://www.figma.com/file/XpekCUXwdO46PcY2mqkmgATD/pbg-desktop?node-id=3274%3A16';

storiesOf('Consumer/Desktop/Modals & Popovers/secondary-modal', module)
  .addDecorator(storyFn => <WithFigma url={figmaUrl}>{storyFn()}</WithFigma>)
  .addDecorator(withContainer)
  .add('secondary-modal/icon', () => (
    <SecondaryModal
      title="Secondary Modal"
      iconType="rocket"
      onClose={action('click')}
    >
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
          <SecondaryModal
            title="Secondary Modal"
            iconType="rocket"
            onClose={this.hideModal}
          >
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
