import React from 'react';
import moment from 'moment';
import Hint from '../hint';
import { H3 } from '../heading';
import './style.css';

const FORMAT = 'hh:mm a';
const ActivityCard = (props) => (
  <div className={className(props)}>
    <Hint>{ props.date ? moment(props.date).format(FORMAT) : FORMAT }</Hint>
    { props.children }
  </div>
);

const UserCommentCard = (props) => (
  <ActivityCard type={ActivityCard.types.white} date={props.date}>
    <H3>{props.userName}</H3>
    <p>{props.comment}</p>
  </ActivityCard>
);

const className = (props) => {
  const base = 'pbg-consumer-mobile pbg-activity-card';
  if (props.type && classNames[props.type]) return `${base} ${classNames[props.type]}`;
  return base;
}

ActivityCard.types = {
  white: 'white',
};

const classNames = {
  white: 'pbg-activity-card-white',
};

export {
  ActivityCard,
  UserCommentCard,
}