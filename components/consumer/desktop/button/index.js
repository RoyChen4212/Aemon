import React from 'react';
import Button from './button';

export const PrimaryButton = (props) => (
  <Button {...props} className="pbg-button-primary">{props.children}</Button>
);

export default Button;