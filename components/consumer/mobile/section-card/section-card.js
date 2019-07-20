import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { sectionCardStatus } from './contants';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-section-card';

const SectionCard = ({
  status,
  children,
  title,
  stepNumber,
  headerButton: Button,
  activateButtonText,
  onActivateButtonClick,
  completedLabel,
}) => {
  return (
    <div className={cx(baseClassName, { disabled: status === sectionCardStatus.DISABLED })}>
      <div className="pbg-section-card-header">
        <div className="pbg-section-card-header-row">
          <div className="pbg-section-card-header-text">
            {status !== sectionCardStatus.COMPLETED ? (
              <div className="pbg-section-card-step-number pbg-mobile-heading-2">{stepNumber}.</div>
            ) : (
              <div className="pbg-section-card-completed-icon" />
            )}
            <div className="pbg-section-card-title pbg-mobile-heading-2">{title}</div>
          </div>
          <div className="pbg-section-card-header-button-wrapper">
            {Button && (
              <Button onClick={onActivateButtonClick} disabled={status === sectionCardStatus.DISABLED}>
                {activateButtonText}
              </Button>
            )}
          </div>
        </div>
        <div className="pbg-section-card-header-row">
          {status === sectionCardStatus.COMPLETED && (
            <div className="pbg-section-card-completed-label">{completedLabel}</div>
          )}
        </div>
      </div>
      {status !== sectionCardStatus.COMPLETED && <div className="pbg-section-card-content">{children}</div>}
    </div>
  );
};

SectionCard.propTypes = {
  status: PropTypes.oneOf([sectionCardStatus.ACTIVE, sectionCardStatus.COMPLETED, sectionCardStatus.DISABLED]),
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  stepNumber: PropTypes.number,
  headerButton: PropTypes.node,
  activateButtonText: PropTypes.string.isRequired,
  onActivateButtonClick: PropTypes.func,
  completedLabel: PropTypes.string,
};

SectionCard.defaultProps = {
  status: sectionCardStatus.ACTIVE,
  stepNumber: null,
  headerButton: null,
  onActivateButtonClick: null,
  completedLabel: null,
};

export default SectionCard;
