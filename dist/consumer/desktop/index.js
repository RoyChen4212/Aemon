"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _avatar = _interopRequireDefault(require("./avatar"));

var _banner = _interopRequireDefault(require("./banner"));

var _divider = _interopRequireDefault(require("./divider"));

var _subheader = _interopRequireDefault(require("./subheader"));

var _activityCard = _interopRequireDefault(require("./activity-card"));

var _activityComment = _interopRequireDefault(require("./activity-comment"));

var _addComment = _interopRequireDefault(require("./add-comment"));

var _button = require("./button");

var _activityThumbnail = _interopRequireWildcard(require("./activity-thumbnail"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var desktop = {
  Avatar: _avatar.default,
  Banner: _banner.default,
  Divider: _divider.default,
  Subheader: _subheader.default,
  ActivityCard: _activityCard.default,
  ActivityComment: _activityComment.default,
  ActivityThumbnail: _activityThumbnail.default,
  PURCHASE_UPDATED: _activityThumbnail.PURCHASE_UPDATED,
  PURCHASE_CLAIMED: _activityThumbnail.PURCHASE_CLAIMED,
  MEMBER_INVITED: _activityThumbnail.MEMBER_INVITED,
  MEMBER_JOINED: _activityThumbnail.MEMBER_JOINED,
  MEMBER_WITHDREW: _activityThumbnail.MEMBER_WITHDREW,
  PURCHASE_TIPPED: _activityThumbnail.PURCHASE_TIPPED,
  PURCHASE_UNTIPPED: _activityThumbnail.PURCHASE_UNTIPPED,
  PAYMENT_AUTHORIZED: _activityThumbnail.PAYMENT_AUTHORIZED,
  PAYMENT_CAPTURED: _activityThumbnail.PAYMENT_CAPTURED,
  PURCHASE_COMPLETED: _activityThumbnail.PURCHASE_COMPLETED,
  PURCHASE_COMMENT_CREATED: _activityThumbnail.PURCHASE_COMMENT_CREATED,
  AddComment: _addComment.default,
  PrimaryButton: _button.PrimaryButton
};
var _default = desktop;
exports.default = _default;