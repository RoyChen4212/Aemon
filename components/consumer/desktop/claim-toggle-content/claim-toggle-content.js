import React from 'react';
import FormField from '../form-field';
import Label, { labelTypes } from '../label';
import P from '../paragraph';
import { Checkbox } from '../checkbox';

import './style.css';

class ClaimToggleContent extends Checkbox {
  baseClassName =
    'pbg-consumer-desktop pbg-form-field pbg-checkbox pbg-claim-toggle-content';

  get label() {
    const { label, explainer } = this.adaptedProps;
    return (
      <div className="pbg-claim-toggle-content-label-explainer-placeholder">
        {label && (
          <Label type={this.labelType} required={this.adaptedProps.required}>
            {label}
          </Label>
        )}
        {explainer && <P>{explainer}</P>}
      </div>
    );
  }
}

export default ClaimToggleContent;
