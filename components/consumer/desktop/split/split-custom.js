import React from 'react';
import { SplitEven } from './split-even';

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
