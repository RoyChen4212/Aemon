import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import PopoverTooltip from '../../../components/consumer/desktop/popover-tooltip';
import { withContainer } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const trigger = ({ onMouseEnter, onMouseLeave }) => (
  <a onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    mouse here.
  </a>
);

trigger.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

storiesOf('Consumer/Desktop/Modals & Popovers', module)
  .addDecorator(withContainer)
  .addDecorator(storyFn => <div className="w-100 h-100 bg-light">{storyFn()}</div>)
  .add('popover-tooltip', () => (
    <PopoverTooltip trigger={trigger} content={<span>I am popover content</span>} />
  ));;
