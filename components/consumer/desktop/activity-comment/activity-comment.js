import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import moment from 'moment';

import ActivityThumbnail, { PURCHASE_COMMENT_CREATED } from '../activity-thumbnail';

import './style.scss';

class ActivityComment extends React.PureComponent {
  static baseClassName = 'pbg-consumer-desktop pbg-activity-comment';

  static propTypes = {
    src: PropTypes.string,
    fullName: PropTypes.string,
    userId: PropTypes.string,
    title: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    src: null,
    fullName: null,
    userId: null,
    className: null,
  };

  get time() {
    const { time } = this.props;
    return moment(time).format('hh:mm A');
  }

  render() {
    const { src, userId, fullName, title, comment, className } = this.props;
    return (
      <div className={cx(ActivityComment.baseClassName, 'd-flex', className)}>
        <ActivityThumbnail type={PURCHASE_COMMENT_CREATED} src={src} userId={userId} fullName={fullName} />
        <div className="activity-comment-text">
          <div className="activity-comment-bubbletip" />
          <p className="activity-comment-title">{title}</p>
          <p className="activity-comment-time">{this.time}</p>
          <p className="activity-comment-comment">{comment}</p>
        </div>
      </div>
    );
  }
}

export default ActivityComment;
