import React from 'react';
import BaseButton, { CLASS_NAME } from '../../shared/button';
import Hint from '../hint';
import './style.css';

class PrimaryButton extends BaseButton {
  baseClassName = `${CLASS_NAME} pbg-consumer-desktop pbg-button-primary`;
  get hint() { return this.renderHint(Hint); }
}

export {
  PrimaryButton,
};
