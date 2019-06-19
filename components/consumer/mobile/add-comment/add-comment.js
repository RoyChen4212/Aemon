import React from 'react';
import BaseAddComment from '../../shared/base-add-comment';
import { TextArea } from '../text-area';
import Avatar from '../avatar';
import { SmallButton } from '../button';
import Label, { labelTypes } from '../label';

import './style.scss';

class AddComment extends BaseAddComment {
  baseClassName = 'pbg-consumer-mobile pbg-add-comment';

  get avatar() {
    return (
      <div className="pbg-add-comment-avatar-with-name">
        {this.renderAvatar(Avatar)}
        <Label type={labelTypes.STRONG}>{this.adaptedProps.fullName}</Label>
      </div>
    );
  }

  get submitButton() {
    return this.renderSubmitButton(SmallButton);
  }

  get textArea() {
    return this.renderTextArea(TextArea);
  }
}

export default AddComment;
