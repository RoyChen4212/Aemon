import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { SmallButton } from '../button';
import { iconTypes } from '../../shared/icon-types';

const baseClassName = 'pbg-consumer-mobile pbg-expandable-section';

const ExpandableSection = ({ title, secondaryText, showText, hideText, children, expanded, onClick }) => (
  <div className={baseClassName}>
    <div className="pbg-expandable-section-row">
      <div className="pbg-mobile-heading-2">{title}</div>
      <SmallButton iconType={expanded ? iconTypes.ARROW_UP : iconTypes.ARROW_DOWN} onClick={onClick}>
        {expanded ? hideText : showText}
      </SmallButton>
    </div>
    <div className="pbg-mobile-label-secondary">{secondaryText}</div>
    {expanded && <div className="pbg-expandable-section-children">{children}</div>}
  </div>
);

ExpandableSection.propTypes = {
  title: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  showText: PropTypes.string.isRequired,
  hideText: PropTypes.string.isRequired,
  expanded: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

ExpandableSection.defaultProps = {
  expanded: false,
};

export default ExpandableSection;
