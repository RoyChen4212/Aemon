import React from 'react';
import Button from './button';

export const PrimaryButton = (props) => (
  <Button {...props} className='pbg-button-primary'>{props.children}</Button>
);

export const SecondaryButton = (props) => (
  <Button {...props} className='pbg-button-secondary'>{props.children}</Button>
);
