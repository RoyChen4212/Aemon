import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import ActivityThumbnail from '../activity-thumbnail';

import './style.scss';

class ActivityCard extends React.PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  get time() {
    const { time } = this.props;
    return moment(time).format('hh:mm A');
  }

  render() {
    const { type, title, children } = this.props;
    return (
      <div className="activity-card d-flex">
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
