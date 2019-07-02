import React from 'react';
import { storiesOf } from '@storybook/react';
import Popover from '../../../components/consumer/desktop/popover';
import Label, { labelTypes } from '../../../components/consumer/desktop/label';
import { withContainer } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Modals & Popovers', module)
  .addDecorator(withContainer)
  .addDecorator(storyFn => <div className="w-100 h-100 bg-light">{storyFn()}</div>)
  .add('popover', () => (
    <Popover
      trigger={props => (
        <Label type={labelTypes.CLICKABLE} onClick={props.onClick}>
          Click Me
        </Label>
      )}
      content={<div>I am popover content</div>}
    />
  ));
