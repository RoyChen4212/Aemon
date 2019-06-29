import React from 'react';
import moment from 'moment';
import Hint from '../hint';
import { H3 } from '../heading';
import ActivityThumbnail from '../activity-thumbnail';
import Avatar from '../avatar';

import './style.scss';

const FORMAT = 'hh:mm a';
const ActivityCard = ({ date, children, type, className }) => (
  <div className={buildClassName({ type, className })}>
    <Hint>{date ? moment(date).format(FORMAT) : FORMAT}</Hint>
    {children}
  </div>
);

const UserCommentCard = props => {
  const { date, title, comment } = props;
  return (
    <ActivityCard type={ActivityCard.types.white} date={date} className="pbg-user-comment-card">
      <div className="d-flex">
        <Avatar {...props} />
        <div className="flex-grow-1">
          <H3>{title}</H3>
        </div>
      </div>
      <p>{comment}</p>
    </ActivityCard>
  );
};

const GroupActivityCard = ({ date, type, title, children }) => (
  <ActivityCard date={date} className="pbg-group-activity-card">
    <div className="d-flex">
      <ActivityThumbnail type={type} />
      <div className="flex-grow-1">
        <H3>{title}</H3>
        <div className="pbg-group-activity-card-content">{children}</div>
      </div>
    </div>
  </ActivityCard>
);

const buildClassName = ({ type, className }) => {
  let base = 'pbg-consumer-mobile pbg-activity-card';
  if (className) {
    base += ` ${className}`;
  }

  if (type && classNames[type]) return `${base} ${classNames[type]}`;

  return base;
};

ActivityCard.types = {
  white: 'white',
};

const classNames = {
  white: 'pbg-activity-card-white',
};

export { ActivityCard, UserCommentCard, GroupActivityCard };
