import React from 'react';

import { H3 } from '../heading';
import P from '../paragraph';
import Container from '../container';
import FormField from '../form-field';
import { Checkbox } from '../checkbox';

import './style.css';

class ClaimToggle extends FormField {
  baseClassName = 'pbg-claim-toggle'

  get isRequiredOrLocked() {
    return this.props.required || this.props.locked;
  }

  render() {
    const required = this.props.required ? 'claim-toggle-required' : ''
    const locked = this.props.locked ? 'claim-toggle-locked' : ''

    return (
      <Container
        className={`${this.baseClassName} ${required} ${locked}`}
        stroked={!this.isRequiredOrLocked}
        solid={this.isRequiredOrLocked} >

        <Checkbox
          onChange={this.onChange}
          value={this.value}
          disabled={this.props.locked}/>

        <H3>{this.props.label}</H3>
        <P>{this.props.text}</P>
      </Container>
    );
  }
}

export default ClaimToggle;
