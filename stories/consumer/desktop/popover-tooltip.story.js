import React from 'react';
import { storiesOf } from '@storybook/react';
import PopoverTooltip from '../../../components/consumer/desktop/popover-tooltip';
import Label, { labelTypes } from '../../../components/consumer/desktop/label';
import { withContainer, wrapStory } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

const trigger = props => (
  <a onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
    mouse here.
  </a>
);

storiesOf('Consumer/Desktop/Modals & Popovers', module)
  .addDecorator(withContainer)
  .addDecorator(storyFn => <div className="w-100 h-100 bg-light">{storyFn()}</div>)
  .add('popover-tooltip/default', () => (
    <PopoverTooltip trigger={trigger} content={<span>I am popover content</span>} />
  ))
  .add('popover-tooltip/default/constrained', () => (
    <div className="offset-sm-10 col-sm-2">
      <PopoverTooltip trigger={trigger} content={<span>I am popover content</span>} />
    </div>
  ));
