import React from 'react';
import { storiesOf } from '@storybook/react';
import Popover from '../../../components/consumer/desktop/popover';
import Label, { labelTypes } from '../../../components/consumer/desktop/label';
import { withContainer } from '../../util/decorators';

import '../../style.css';
import 'bootstrap/dist/css/bootstrap.css';

storiesOf('Consumer/Desktop/Modals & Popovers/popover', module)
  .addDecorator(withContainer)
  .addDecorator(storyFn => <div className="w-100 h-100 bg-light">{storyFn()}</div>)
  .add('popover/default', () => (
    <Popover
      trigger={props => (
        <Label type={labelTypes.CLICKABLE} onClick={props.onClick}>
          Click Me
        </Label>
      )}
      content={<div>I am popover content</div>}
    />
  ))
  .add('popover/default/constrained', () => (
    <div className="offset-sm-10 col-sm-2">
      <Popover
        trigger={props => (
          <Label type={labelTypes.CLICKABLE} onClick={props.onClick}>
            Click Me
          </Label>
        )}
        content={<div>I am popover content</div>}
      />
    </div>
  ));
