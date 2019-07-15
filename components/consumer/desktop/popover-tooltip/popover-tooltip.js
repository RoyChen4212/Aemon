import React from 'react';
import jQuery from 'jquery';
import Popover from '../popover';

import './style.scss';

class PopoverTooltip extends Popover {
  bindDeactivationEvent = () => {
    return null;
  };

  componentDidMount() {
    this.viewWidth = jQuery(window).width();
  }

  get className() {
    return `pbg-popover-tooltip pbg-popover-${this.active ? 'active' : 'disactive'}`;
  }

  renderTriggerComponent() {
    const { trigger: TriggerComponent } = this.props;
    if (!TriggerComponent) return null;
    return <TriggerComponent onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} />;
  };
}

export default PopoverTooltip;
