import React from 'react';
import Container from '../container';
import Popover from '../popover';
import jQuery from 'jquery';
import './style.css';

class PopoverTooltip extends Popover {
  bindDeactivationEvent = () => { return null; }

  componentDidMount() {
    this.viewWidth = jQuery(window).width();
  }

  get className() {
    return `pbg-popover-tooltip ${this.active ? 'pbg-popover-active' : ''}`;
  }

  get triggerComponent() {
    const TriggerComponent = this.props.trigger;
    if (!TriggerComponent) return null;
    return <TriggerComponent onMouseEnter={() => {
      console.log('activating')
      this.activate()
    }} onMouseLeave={this.deactivate}/>;
  }
}

export default PopoverTooltip;