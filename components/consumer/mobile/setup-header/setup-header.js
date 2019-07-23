import React from 'react';
import PropTypes from 'prop-types';
import { SmallButton } from '../button';
import StepProgressBar from '../step-progress-bar';

import './style.scss';

const baseClassName = 'pbg-consumer-mobile pbg-setup-header';

class SetupHeader extends React.Component {
  state = { expanded: false };

  onButtonClick = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  render() {
    const { label, hint, viewInfoText, hideInfoText, stepCount, progress, children } = this.props;
    const { expanded } = this.state;
    const buttonText = expanded ? hideInfoText : viewInfoText;
    const buttonIcon = expanded ? 'arrow-up' : 'arrow-down';

    return (
      <div className={baseClassName}>
        <div className="pbg-setup-header-inner">
          <div className="pbg-setup-header-text">
            <span className="pbg-mobile-label-normal">{label}</span>
            {hint && <span className="pbg-mobile-small-secondary">{hint}</span>}
          </div>
          <SmallButton className="pbg-setup-header-button" iconType={buttonIcon} onClick={this.onButtonClick}>
            {buttonText}
          </SmallButton>
        </div>
        {stepCount > 0 && <StepProgressBar stepCount={stepCount} progress={progress} />}
        {expanded && <div className="pbg-setup-header-content">{children}</div>}
      </div>
    );
  }
}

SetupHeader.propTypes = {
  label: PropTypes.string.isRequired,
  viewInfoText: PropTypes.string.isRequired,
  hideInfoText: PropTypes.string.isRequired,
  hint: PropTypes.string,
  children: PropTypes.node,
  stepCount: PropTypes.number,
  progress: PropTypes.number,
};

SetupHeader.defaultProps = {
  hint: null,
  children: null,
  stepCount: 0,
  progress: 0,
};

export default SetupHeader;
