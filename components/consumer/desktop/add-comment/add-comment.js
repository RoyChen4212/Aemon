import React from 'react';
import TextArea from '../text-area';
import Avatar from '../avatar';
import { PrimaryButton } from '../button';

import './style.css'

class AddComment extends React.PureComponent {
  renderAvatar() {
    if (this.props.avatarSrc) return <Avatar src={this.props.avatarSrc} />;
    return <Avatar userId={this.props.userId} />;
  }

  render() {
    return (
      <div className="pbg-consumer-desktop pbg-add-comment">
        <div className="pbg-add-comment-avatar-placeholder">
          {this.renderAvatar()}
        </div>
        <div className="pbg-add-comment-form-placeholder">
          <TextArea
            hint={this.props.hint}
            value={this.props.value}
            error={this.props.error}
            label={this.props.textLabel}
          />
          <PrimaryButton>{this.props.ctaLabel}</PrimaryButton>
        </div>
      </div>
    );
  }
};

export default AddComment;
