import React from 'react';
import BaseFormField from './base-form-field';

class BaseAddComment extends BaseFormField {
  get className() {
    return this.baseClassName;
  }

  renderAvatar(Avatar) {
    if (this.adaptedProps.avatarSrc) return <Avatar src={this.adaptedProps.avatarSrc} />;
    return <Avatar userId={this.adaptedProps.userId} fullName={this.adaptedProps.fullName} />;
  }

  renderSubmitButton(Button) {
    return <Button>{this.adaptedProps.ctaLabel}</Button>;
  }

  renderTextArea(TextArea) {
    return <TextArea {...this.props} rows={1} label={this.adaptedProps.textLabel} />;
  }

  render() {
    return (
      <div className={this.className}>
        <div className="pbg-add-comment-avatar-placeholder">{this.renderAvatar()}</div>
        <div className="pbg-add-comment-form-placeholder">
          {this.renderTextArea()}
          {this.renderSubmitButton()}
        </div>
      </div>
    );
  }
}

export default BaseAddComment;
