import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import BaseAddComment from '../../../components/consumer/shared/base-add-comment';
import Avatar from '../../../components/consumer/mobile/avatar';
import {TextArea} from '../../../components/consumer/mobile/text-area';

describe('BaseAddComment', () => {
  it('should throw an error when calling .avatar directly from the super class', () => {
    expect(() => {
      const wrapper = shallow(<BaseAddComment />);
      const instance = wrapper.instance();
      return instance.avatar;
    }).to.throw('Not implemented, Implement this method in a sub-class.');
  });

  it('should throw an error when calling .submitButton directly from the super class', () => {
    class WithAvatar extends BaseAddComment {
      get avatar() { return this.renderAvatar(Avatar); }
    }

    expect(() => {
      const wrapper = shallow(<WithAvatar />);
      const instance = wrapper.instance();
      return instance.submitButton;
    }).to.throw('Not implemented, Implement this method in a sub-class.');
  });

  it('should throw an error when calling .textArea directly from the super class', () => {
    class WithAvatarAndTextArea extends BaseAddComment {
      get avatar() { return this.renderAvatar(Avatar); }
      get textArea() { return this.renderTextArea(TextArea); }
    }
    expect(() => {
      const wrapper = shallow(<WithAvatarAndTextArea />);
      const instance = wrapper.instance();
      return instance.textArea;
    }).to.throw('Not implemented, Implement this method in a sub-class.');
  });
});