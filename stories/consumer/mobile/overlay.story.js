import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Overlay from '../../../components/consumer/mobile/overlay';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const opened = true;
storiesOf('Consumer/Mobile/Overlay', module)
.addDecorator(wrapStory)
.addDecorator(withContainer)
.add('overlay view', () =>
  <Overlay
    title="Title"
    opened={opened}
    onBackButtonClick={action('onBackButtonClick')}
  />
)
.add('overlay view 1', () =>
  <Overlay
    title="Title"
    opened={opened}
  />
)
.add('overlay animation', () =>
  <AnimationOverlay />
);


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
        <button onClick={this.onClick}>Show overlay</button>
        <Overlay
          title='Title'
          opened={overlayOpened}
          onBackButtonClick={this.onBackButtonClick}
        />
      </React.Fragment>
    );
  }
}
