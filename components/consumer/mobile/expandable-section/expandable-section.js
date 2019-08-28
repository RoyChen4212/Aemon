import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './style.scss';
import { SmallButton } from '../button';
import { iconTypes } from '../../shared/icon-types';

const baseClassName = 'pbg-consumer-mobile pbg-expandable-section';

class ExpandableSection extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    hint: PropTypes.string.isRequired,
    showText: PropTypes.string.isRequired,
    hideText: PropTypes.string.isRequired,
    className: PropTypes.string,
    defaultExpanded: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    defaultExpanded: false,
    className: null,
  };

  constructor(props) {
    super(props);

    const { defaultExpanded } = this.props;
    this.state = { expanded: defaultExpanded };
  }

  onClick = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  render() {
    const { title, hint, showText, hideText, children, className } = this.props;
    const { expanded } = this.state;
    return (
      <div className={cx(baseClassName, className)}>
        <div className="pbg-expandable-section-row">
          <div className="pbg-mobile-heading-2">{title}</div>
          <SmallButton iconType={expanded ? iconTypes.ARROW_UP : iconTypes.ARROW_DOWN} onClick={this.onClick}>
            {expanded ? hideText : showText}
          </SmallButton>
        </div>
        {!expanded && <div className="pbg-mobile-label-secondary">{hint}</div>}
        {expanded && <div className="pbg-expandable-section-children">{children}</div>}
      </div>
    );
  }
}

export default ExpandableSection;
