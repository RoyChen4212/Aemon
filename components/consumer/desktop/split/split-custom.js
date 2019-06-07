import React from 'react';
import find from 'lodash/find';
import get from 'lodash/get';
import Picker from '../picker';
import { SplitEven } from './split-even';
import NumberStepper from '../simple-number-stepper';

class SplitCustom extends SplitEven {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-split pbg-split-custom';

  render() {
    return (
      <div className={this.className}>
        {this.renderSplitTypePicker()}
        <div className="pbg-split-copy">{this.copy.for || ''}</div>
      </div>
    );
  }
}

export { SplitCustom };
