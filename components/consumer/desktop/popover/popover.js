import React from 'react';
import jQuery from 'jquery';
import Container from '../container';
import './style.css';

class Popover extends React.PureComponent {
  popoverElementRef = React.createRef();

  state = {
    active: false,
  };

  activate = () => {
    this.setState({ active: true });
  };

  deactivate = () => {
    this.setState({ active: false });
  };

  bindDeactivationEvent = () => {
    const body = jQuery('body');
    body.on('click', this.deactivateIfClickOutside);
  };

  deactivateIfClickOutside = ev => {
    const elem = this.popoverElementRef.current;
    const parents = jQuery(ev.target).parents('.pbg-popover');
    const clickedOutside =
      elem !== ev.target && (parents && elem !== parents[0]);
    if (clickedOutside) this.deactivate();
  };

  positionPopoverWithinWindow() {
    const elem = jQuery(this.popoverElementRef.current);
    const popoverRightBorderPosition = elem.offset().left + elem.outerWidth();
    if (this.viewWidth < popoverRightBorderPosition) {
      elem.css({ left: this.viewWidth - popoverRightBorderPosition - 16 });
    }
  }

  componentDidMount() {
    this.viewWidth = jQuery(window).width();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.active && !prevState.active) {
      this.positionPopoverWithinWindow();
      this.bindDeactivationEvent();
    }
  }

  get className() {
    return `pbg-popover ${this.active ? 'pbg-popover-active' : ''}`;
  }

  get triggerComponent() {
    const TriggerComponent = this.props.trigger;
    return TriggerComponent ? (
      <TriggerComponent onClick={this.activate} />
    ) : null;
  }

  get active() {
    return this.state.active;
  }

  render() {
    return (
      <div className="pbg-consumer-desktop pbg-popover-container">
        {this.triggerComponent}
        <Container
          shadow2
          stroked
          solid
          className={this.className}
          ref={this.popoverElementRef}
        >
          {this.props.content}
        </Container>
      </div>
    );
  }
}

export default Popover;
