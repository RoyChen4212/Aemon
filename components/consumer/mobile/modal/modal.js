import React from 'react';
import { H2 } from '../heading';
import {
  LinkButton, PrimaryButton, SecondaryButton, types as buttonTypes
} from '../button';

import './style.css';

class Modal extends React.PureComponent {
  onBackClick = () => {
    if (this.props.onBackClick) {
      return this.props.onBackClick();
    }
  }

  get cta() {
    if (this.props.cta && this.props.cta.length) {
      return (
        <div className="pbg-modal-cta">
          {
            this.props.cta.map((config, index) => (
              renderButton(config, index === this.props.cta.length - 1)
            ))
          }
        </div>
      );
    }
  }

  render() {
    return (
      <div className="pbg-consumer-mobile pbg-modal">
        <div className="pbg-modal-dialog">
          <div className="pbg-modal-heading">
            <LinkButton onClick={this.onBackClick}>{this.props.backButtonCaption}</LinkButton>
            <H2>{this.props.title}</H2>
          </div>
          <div className="pbg-modal-body">
            { this.props.children }
          </div>
          { this.cta }
        </div>
        <div className="pbg-modal-overlay" onClick={this.props.onBackClick} />
      </div>
    );
  }
};

const renderButton = ({ label, onClick, type }, isLast) => {
  const ButtonComponent = chooseComponent(type);
  return (
    <ButtonComponent onClick={onClick} key={label} className={isLast ? 'last' : ''}>
      {label}
    </ButtonComponent>
  );
}

const chooseComponent = (type) => {
  switch(type) {
    case buttonTypes.LINK:
      return LinkButton;
    case buttonTypes.SECONDARY:
      return SecondaryButton;
    case buttonTypes.PRIMARY:
    default:
      return PrimaryButton;
  }
}

export default Modal;
