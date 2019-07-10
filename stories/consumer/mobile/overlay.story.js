import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Overlay from '../../../components/consumer/mobile/overlay';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Mobile/Overlay', module)
.addDecorator(wrapStory)
.addDecorator(withContainer)
.add('overlay view', () =>
  <Overlay
    title="Title"
    opened={true}
    onBackButtonClick={action('onBackButtonClick')}
  />
)
.add('overlay animation', () =>
  <AnimationOverlay
    onOpened={action('onOpened')}
    onClosed={action('onClosed')}
  />
);


class AnimationOverlay extends React.Component {
  static propTypes = {
    onClosed: PropTypes.func.isRequired,
    onOpened: PropTypes.func.isRequired
  };

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
    const { onOpened, onClosed } = this.props;
    return (
      <React.Fragment>
        <button onClick={this.onClick}>Show overlay</button>
        <Overlay
          title='Title'
          opened={overlayOpened}
          onBackButtonClick={this.onBackButtonClick}
          onOpened={onOpened}
          onClosed={onClosed}
        />
      </React.Fragment>
    );
  }
}
