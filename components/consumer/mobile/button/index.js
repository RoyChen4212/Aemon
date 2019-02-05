import React from 'react';
import Button from './button';

export const PrimaryButton = (props) => (
  <Button {...props} className='pbg-consumer-mobile pbg-button-primary'>{props.children}</Button>
);

export const SecondaryButton = (props) => (
  <Button {...props} className='pbg-consumer-mobile pbg-button-secondary'>{props.children}</Button>
);

export const SmallButton = (props) => (
  <Button {...props} className='pbg-consumer-mobile pbg-button-small'>{props.children}</Button>
);

export const LinkButton = (props) => (
  <Button {...props} className='pbg-consumer-mobile pbg-button-link'>{props.children}</Button>
);

export const FacebookButton = (props) => (
  <Button {...props} className='pbg-consumer-mobile pbg-button-facebook'>{props.children}</Button>
);

export const SmallFacebookButton = (props) => (
  <Button {...props} className='pbg-consumer-mobile pbg-button-facebook-small'>{props.children}</Button>
);
