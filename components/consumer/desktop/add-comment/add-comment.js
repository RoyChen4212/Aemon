import BaseAddComment from '../../shared/base-add-comment';
import TextArea from '../text-area';
import Avatar from '../avatar';
import { PrimaryButton } from '../button';

import './style.scss';

class AddComment extends BaseAddComment {
  baseClassName = 'pbg-consumer-desktop pbg-add-comment';

  renderAvatar() {
    return super.renderAvatar(Avatar);
  }

  renderSubmitButton() {
    return super.renderSubmitButton(PrimaryButton);
  }

  renderTextArea() {
    return super.renderTextArea(TextArea);
  }
}

export default AddComment;
