import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Container from '../container';
import FormField from '../form-field';
import ClaimToggleContent from '../claim-toggle-content';

import './style.scss';

class ClaimToggle extends FormField {
  baseClassName = 'pbg-claim-toggle';

  static propTypes = {
    className: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    className: null,
    required: false,
    disabled: false,
  };

  get isRequiredOrDisabled() {
    return this.props.required || this.props.disabled;
  }

  render() {
    const { className } = this.props;
    const required = this.props.required ? 'claim-toggle-required' : '';
    const disabled = this.props.disabled ? 'claim-toggle-disabled' : '';

    return (
      <Container
        className={cx(this.baseClassName, required, disabled, className)}
        stroked={!this.isRequiredOrDisabled}
        solid={this.isRequiredOrDisabled}
      >
        <ClaimToggleContent {...this.props} />
      </Container>
    );
  }
}

export default ClaimToggle;
