import React from 'react';
import { SplitEven } from './split-even';

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
