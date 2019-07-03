import React from 'react';

import Label from '../label';
import Checkbox from '../checkbox';

import './style.scss';

class ClaimToggleContent extends Checkbox {
  baseClassName = 'pbg-consumer-desktop pbg-form-field pbg-checkbox pbg-claim-toggle-content';

  get label() {
    const { label, explainer } = this.adaptedProps;
    return (
      <div className="pbg-claim-toggle-content-label-explainer-placeholder">
        {label && (
          <Label type={this.labelType} required={this.adaptedProps.required}>
            {label}
          </Label>
        )}
        {explainer && <p className="pbg-consumer-desktop pbg-desktop-paragraph">{explainer}</p>}
      </div>
    );
  }
}

export default ClaimToggleContent;
