import React from 'react';
import PropTypes from 'prop-types';
import { includes } from 'lodash';

export const URL_PREFIX = 'https://assets.paybygroup.com/images/activity-icons/';

export const PURCHASE_UPDATED = 'purchase_updated';
export const PURCHASE_CLAIMED = 'purchase_claimed';
export const MEMBER_INVITED = 'member_invited';
export const MEMBER_JOINED = 'member_joined';
export const MEMBER_WITHDREW = 'member_withdrew';
export const PURCHASE_TIPPED = 'purchase_tipped';
export const PURCHASE_UNTIPPED = 'purchase_untipped';
export const PAYMENT_AUTHORIZED = 'payment_authorized';
export const PAYMENT_AUTHORIZED_DEPOSIT = 'payment_authorized_deposit';
export const PAYMENT_AUTHORIZED_REGULAR = 'payment_authorized_regular';
export const PAYMENT_AUTHORIZED_LAST = 'payment_authorized_last';
export const PAYMENT_CAPTURED = 'payment_captured';
export const PURCHASE_COMPLETED = 'purchase_completed';
export const PURCHASE_COMMENT_CREATED = 'purchase_comment_created';
export const DEFAULT_ICON_URL = `${URL_PREFIX}${MEMBER_WITHDREW}`;

const types = [
  PURCHASE_UPDATED,
  PURCHASE_CLAIMED,
  MEMBER_INVITED,
  MEMBER_JOINED,
  MEMBER_WITHDREW,
  PURCHASE_TIPPED,
  PURCHASE_UNTIPPED,
  PAYMENT_AUTHORIZED,
  PAYMENT_AUTHORIZED_DEPOSIT,
  PAYMENT_AUTHORIZED_REGULAR,
  PAYMENT_AUTHORIZED_LAST,
  PAYMENT_CAPTURED,
  PURCHASE_COMPLETED,
  PURCHASE_COMMENT_CREATED,
  DEFAULT_ICON_URL,
];

class ActivityThumbnail extends React.PureComponent {
  static DEFAULT_SIZE = 32;

  static propTypes = {
    size: PropTypes.number,
    userId: PropTypes.string,
    src: PropTypes.string,
    fullName: PropTypes.string,
    type(props, propName) {
      if (!includes(types, props[propName])) {
        return new Error(`Invalid prop ${propName} supplied to ActivityThumbnail. Validation failed.`);
      }
      return null;
    },
  };

  static defaultProps = {
    size: ActivityThumbnail.DEFAULT_SIZE,
    type: null,
    userId: null,
    src: null,
    fullName: null,
  };

  static icons = {
    [PURCHASE_UPDATED]: `${URL_PREFIX}${PURCHASE_UPDATED}.svg`,
    [PURCHASE_CLAIMED]: `${URL_PREFIX}${PURCHASE_CLAIMED}.svg`,
    [MEMBER_INVITED]: `${URL_PREFIX}${MEMBER_INVITED}.svg`,
    [MEMBER_JOINED]: `${URL_PREFIX}${MEMBER_JOINED}.svg`,
    [MEMBER_WITHDREW]: `${URL_PREFIX}${MEMBER_WITHDREW}.svg`,
    [PURCHASE_TIPPED]: `${URL_PREFIX}${PURCHASE_TIPPED}.svg`,
    [PURCHASE_UNTIPPED]: `${URL_PREFIX}${PURCHASE_UNTIPPED}.svg`,
    [PAYMENT_AUTHORIZED]: `${URL_PREFIX}${PAYMENT_AUTHORIZED}.svg`,
    [PAYMENT_AUTHORIZED_DEPOSIT]: `${URL_PREFIX}${PAYMENT_AUTHORIZED_DEPOSIT}.svg`,
    [PAYMENT_AUTHORIZED_REGULAR]: `${URL_PREFIX}${PAYMENT_AUTHORIZED_REGULAR}.svg`,
    [PAYMENT_AUTHORIZED_LAST]: `${URL_PREFIX}${PAYMENT_AUTHORIZED_LAST}.svg`,
    [PAYMENT_CAPTURED]: `${URL_PREFIX}${PAYMENT_CAPTURED}.svg`,
    [PURCHASE_COMPLETED]: `${URL_PREFIX}${PURCHASE_COMPLETED}.svg`,
    [PURCHASE_COMMENT_CREATED]: false,
  };

  baseClassName = 'pbg-activity-thumbnail';

  get shouldRenderAvatar() {
    const { type, src, userId, fullName } = this.props;
    const hasUrl = !!ActivityThumbnail.icons[type];
    return !hasUrl && (!!src || !!userId || !!fullName);
  }

  renderAvatar() {
    throw new Error('Not implemented, Implement this method in a sub-class.');
  }

  renderAvatarWithElement(Avatar) {
    return (
      <div className={this.baseClassName}>
        <Avatar {...this.props} />
      </div>
    );
  }

  render() {
    const { type, size } = this.props;
    if (this.shouldRenderAvatar) return this.renderAvatar();
    const url = ActivityThumbnail.icons[type];
    return (
      <div className={this.baseClassName}>
        <img src={url} width={size} height={size} />
      </div>
    );
  }
}

export default ActivityThumbnail;
