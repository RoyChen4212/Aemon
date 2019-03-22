import React from 'react';
import FormField from '../form-field';
import TextArea from '../text-area';
import Avatar from '../avatar';
import { PrimaryButton } from '../button';

import './style.css'

class AddComment extends FormField {
  renderAvatar() {
    if (this.props.avatarSrc) return <Avatar src={this.props.avatarSrc} />;
    return <Avatar userId={this.props.userId} fullName={this.props.fullName} />;
  }

  render() {
    return (
      <div className="pbg-consumer-desktop pbg-add-comment">
        <div className="pbg-add-comment-avatar-placeholder">
          {this.renderAvatar()}
        </div>
        <div className="pbg-add-comment-form-placeholder">
          <TextArea
            {...this.props}
            rows={1}
            label={this.props.textLabel}
          />
          <PrimaryButton>{this.adaptedProps.ctaLabel}</PrimaryButton>
        </div>
      </div>
    );
  }
};

export default AddComment;