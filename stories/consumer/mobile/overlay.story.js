import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Overlay from '../../../components/consumer/mobile/overlay';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Info/overlay', module)
  .addDecorator(wrapStory)
  .addDecorator(withContainer)
  .add('overlay/default', () => (
    <Overlay title="Title" backText="back" opened onBackButtonClick={action('onBackButtonClick')} />
  ))
  .add('overlay/animation', () => <AnimationOverlay />);

class AnimationOverlay extends React.Component {
  state = {
    overlayOpened: false,
  };

  onClick = () => {
    this.setState({ overlayOpened: true });
  };

  onBackButtonClick = () => {
    this.setState({ overlayOpened: false });
  };

  render() {
    const { overlayOpened } = this.state;
    return (
      <React.Fragment>
        <button type="button" onClick={this.onClick}>
          Show overlay
        </button>
        <Overlay title="Title" backText="back" opened={overlayOpened} onBackButtonClick={this.onBackButtonClick}>
          <p>This is the overlay content.</p>
        </Overlay>
      </React.Fragment>
    );
  }
}
