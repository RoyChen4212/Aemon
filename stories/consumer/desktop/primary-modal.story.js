import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PrimaryModal from '../../../components/consumer/desktop/primary-modal';
import Divider from '../../../components/consumer/desktop/divider';
import { PrimaryButton } from '../../../components/consumer/desktop/button';
import { withGreyContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Modals & Popovers/primary-modal', module)
  .addDecorator(wrapStory)
  .addDecorator(withGreyContainer)
  .add('primary-modal', () => (
    <div className="p2">
      <PrimaryModal
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
    </div>
  ))
  .add('primary-modal/dividers in content', () => (
    <div className="p2">
      <PrimaryModal
        mainContent={
          <div>
            <span>Something</span>
            <Divider />
            <span>Something else</span>
            <Divider />
            <span>Something more</span>
            <Divider />
            <span>Something more else</span>
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
    </div>
  ))
  .add('primary-modal/long-content', () => (
    <div className="p2">
      <PrimaryModal
        mainContent={
          <div>
            <h2>Main content</h2>
            <p>This is the main content section, style it as you want.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
          </div>
        }
        sidebarContent={
          <div>
            <h2>Sidebar</h2>
            <p>This is the sidebar content section, style it as you want.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
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
    </div>
  ))
  .add('primary-modal/long footer/long-content', () => (
    <div className="p2">
      <PrimaryModal
        mainContent={
          <div>
            <h2>Main content</h2>
            <p>This is the main content section, style it as you want.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
          </div>
        }
        sidebarContent={
          <div>
            <h2>Sidebar</h2>
            <p>This is the sidebar content section, style it as you want.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
          </div>
        }
        footerContent={
          <div className="container">
            <div className="row">
              <PrimaryButton onClick={action('clicked')}>Call to action</PrimaryButton>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
          </div>
        }
      />
    </div>
  ))
  .add('primary-modal/no-footer/long-content', () => (
    <div className="p2">
      <PrimaryModal
        mainContent={
          <div>
            <h2>Main content</h2>
            <p>This is the main content section, style it as you want.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
          </div>
        }
        sidebarContent={
          <div>
            <h2>Sidebar</h2>
            <p>This is the sidebar content section, style it as you want.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi consequatur, facilis mollitia
              nemo, odio odit officia officiis perferendis perspiciatis quas quasi qui, quibusdam sed sit soluta tempore
              temporibus vitae?
            </p>
          </div>
        }
        onClose={action('close')}
      />
    </div>
  ))
  .add('primary-modal/no-footer', () => (
    <div className="p2">
      <PrimaryModal
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
        onClose={action('close')}
      />
    </div>
  ))
  .add('primary-modal/form', () => {
    const onSubmit = action('on submit');
    return (
      <div className="p2">
        <PrimaryModal
          form
          formProps={{ onSubmit }}
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
                <PrimaryButton onClick={onSubmit}>Call to action</PrimaryButton>
              </div>
            </div>
          }
          onClose={action('close')}
        />
      </div>
    );
  })
  .add('primary-modal/working-sample', () => (
    <div className="my-5">
      <FullPrimaryModal />
    </div>
  ));

class FullPrimaryModal extends React.Component {
  state = {
    visible: false,
    alerts: [],
  };

  onSuccessAlert = () => {
    const { alerts } = this.state;
    this.setState({ alerts: [...alerts, { type: 'success', title: 'New success.', text: 'Hey, you did it.' }] });
  };

  onWarningAlert = () => {
    const { alerts } = this.state;
    this.setState({ alerts: [...alerts, { type: 'warning', title: 'New warning.', text: "I'm warning you!" }] });
  };

  onButtonClick = () => {
    this.setState({ visible: true });
  };

  onCloseClick = () => {
    this.setState({ visible: false });
  };

  onSubmit = event => {
    action('submitted')(event);
    event.preventDefault();
  };

  renderModal() {
    const { visible, alerts } = this.state;
    // if (!visible) return null;
    return (
      <PrimaryModal
        form
        formProps={{ onSubmit: this.onSubmit }}
        mainContent={
          <div>
            <h2>Main content</h2>
            <p>This is the main content section, style it as you want.</p>
            <p>
              This content is wrapped with a form, so you can submit it hitting <code>enter</code>.
            </p>
            <p>
              <input type="text" placeholder="Submit the form" />
            </p>
            <PrimaryButton onClick={this.onSuccessAlert}>Add success alert</PrimaryButton>
          </div>
        }
        sidebarContent={
          <div>
            <h2>Sidebar content</h2>
            <p>This is the sidebar content section, style it as you want.</p>
            <PrimaryButton onClick={this.onWarningAlert}>Add warning alert</PrimaryButton>
          </div>
        }
        footerContent={
          <div className="container">
            <div className="row">
              <PrimaryButton onClick={this.onSubmit}>Call to action</PrimaryButton>
            </div>
          </div>
        }
        alerts={alerts}
        onClose={this.onCloseClick}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderModal()}
        <div className="container">
          <div className="row">
            <PrimaryButton onClick={this.onButtonClick}>Show modal</PrimaryButton>
          </div>
        </div>
      </div>
    );
  }
}
