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
    return `pbg-popover-tooltip ${this.active ? 'pbg-popover-active' : ''}`;
  }

  // TODO: rename deactivate to onTriggerComponentMouseLeave
  get triggerComponent() {
    const { trigger } = this.props;
    const TriggerComponent = trigger;
    if (!TriggerComponent) return null;
    return (
      <TriggerComponent
        onMouseEnter={() => {
          console.log('activating');
          this.activate();
        }}
        onMouseLeave={this.deactivate}
      />
    );
  }
}

export default PopoverTooltip;
