import React from 'react';
import moment from 'moment';
import Hint from '../hint';
import { H3 } from '../heading';
import ActivityThumbnail from '../activity-thumbnail';
import Avatar from '../avatar';

import './style.scss';

const FORMAT = 'hh:mm a';
const ActivityCard = props => (
  <div className={className(props)}>
    <Hint>{props.date ? moment(props.date).format(FORMAT) : FORMAT}</Hint>
    {props.children}
  </div>
);

const UserCommentCard = props => (
  <ActivityCard type={ActivityCard.types.white} date={props.date} className="pbg-user-comment-card">
    <div className="d-flex">
      <Avatar {...props} />
      <div className="flex-grow-1">
        <H3>{props.title}</H3>
      </div>
    </div>
    <p>{props.comment}</p>
  </ActivityCard>
);

const GroupActivityCard = props => (
  <ActivityCard date={props.date} className="pbg-group-activity-card">
    <div className="d-flex">
      <ActivityThumbnail type={props.type} />
      <div className="flex-grow-1">
        <H3>{props.title}</H3>
        <div className="pbg-group-activity-card-content">{props.children}</div>
      </div>
    </div>
  </ActivityCard>
);

const className = props => {
  let base = 'pbg-consumer-mobile pbg-activity-card';
  if (props.className) {
    base += ` ${props.className}`;
  }

  if (props.type && classNames[props.type]) return `${base} ${classNames[props.type]}`;

  return base;
};

ActivityCard.types = {
  white: 'white',
};

const classNames = {
  white: 'pbg-activity-card-white',
};

export { ActivityCard, UserCommentCard, GroupActivityCard };
