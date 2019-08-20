import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import BaseFormField from './base-form-field';

class BaseAddComment extends BaseFormField {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

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
    const { className } = this.props;
    return (
      <div className={cx(this.className, className)}>
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
