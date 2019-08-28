import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import moment from 'moment';

import ActivityThumbnail from '../activity-thumbnail';

import './style.scss';

class ActivityCard extends React.PureComponent {
  static baseClassName = 'pbg-consumer-desktop pbg-activity-card';

  static propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  get time() {
    const { time } = this.props;
    return moment(time).format('hh:mm A');
  }

  render() {
    const { type, title, children, className } = this.props;
    return (
      <div className={cx(ActivityCard.baseClassName, 'd-flex', className)}>
        <ActivityThumbnail type={type} />

        <div className="activity-card-text">
          <p className="activity-card-title">{title}</p>
          <p className="activity-card-time">{this.time}</p>
          <div className="activity-card-description">{children}</div>
        </div>
      </div>
    );
  }
}

export default ActivityCard;
