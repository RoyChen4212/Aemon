import React from 'react';
import BaseFormField from './base-form-field';

class BaseAddComment extends BaseFormField {
  get className() { return this.baseClassName; }

  get avatar() {
    throw new Error('Not implemented, Implement this method in a sub-class.');
  }

  renderAvatar(Avatar) {
    if (this.adaptedProps.avatarSrc) return <Avatar src={this.adaptedProps.avatarSrc} />;
    return <Avatar userId={this.adaptedProps.userId} fullName={this.adaptedProps.fullName} />;
  }

  get submitButton() {
    throw new Error('Not implemented, Implement this method in a sub-class.');
  }

  renderSubmitButton(Button) {
    return <Button>{this.adaptedProps.ctaLabel}</Button>;
  }

  get textArea() {
    throw new Error('Not implemented, Implement this method in a sub-class.');
  }

  renderTextArea(TextArea) {
    return <TextArea {...this.props} rows={1} label={this.adaptedProps.textLabel} />;
  }

  render() {
    return (
      <div className={this.className}>
        <div className="pbg-add-comment-avatar-placeholder">
          {this.avatar}
        </div>
        <div className="pbg-add-comment-form-placeholder">
          { this.textArea }
          { this.submitButton }
        </div>
      </div>
    );
  }
};

export default BaseAddComment;