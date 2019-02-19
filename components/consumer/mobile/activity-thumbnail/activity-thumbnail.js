import Avatar from '../avatar';
import BaseActivityThumbnail from '../../shared/base-activity-thumbnail';

import './style.css';

class ActivityThumbnail extends BaseActivityThumbnail {
  baseClassName = 'pbg-consumer-mobile activity-thumbnail';

  renderAvatar() {
    return this.renderAvatarWithElement(Avatar);
  }
}

export default ActivityThumbnail