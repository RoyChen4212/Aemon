import React from 'react';
import BaseAddComment from '../../shared/base-add-comment';
import TextArea from '../text-area';
import Avatar from '../avatar';
import { PrimaryButton } from '../button';

import './style.scss';

class AddComment extends BaseAddComment {
  baseClassName = 'pbg-consumer-desktop pbg-add-comment';

  get avatar() {
    return this.renderAvatar(Avatar);
  }

  get submitButton() {
    return this.renderSubmitButton(PrimaryButton);
  }

  get textArea() {
    return this.renderTextArea(TextArea);
  }
}

export default AddComment;
