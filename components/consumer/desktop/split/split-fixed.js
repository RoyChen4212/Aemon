import React from 'react';
import find from 'lodash/find';
import get from 'lodash/get';
import Picker from '../picker';
import { SplitEven } from './split-even';
import NumberStepper from '../simple-number-stepper';

class SplitFixed extends SplitEven {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-split pbg-split-fixed';

  render() {
    return (
      <div className={this.className}>
        <div className="pbg-split-copy">{this.copy.split}</div>
        {this.renderRange()}
      </div>
    );
  }
}

export { SplitFixed };
