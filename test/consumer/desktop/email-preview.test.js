import React from 'react';
import { shallow } from 'enzyme';

import EmailPreview from '../../../components/consumer/desktop/email-preview';

describe('email-preview', () => {
  const logo = 'https://myimage.com';
  const title = 'Split the cost of the purchase';

  it('should have correct class names', () => {
    const wrapper = shallow(<EmailPreview logo={logo} title={title} />);
    expect(wrapper.hasClass('pbg-consumer-desktop')).to.be.true;
    expect(wrapper.hasClass('pbg-email-preview')).to.be.true;
  });

  it('should render an image inside a merchant-logo', () => {
    const wrapper = shallow(<EmailPreview logo={logo} title={title} />);
    const img = wrapper.find('.pbg-email-preview-merchant-logo').find('img');
    expect(img).to.have.lengthOf(1);
    expect(img.prop('src')).to.be.equal(logo);
  });

  it('should render the title', () => {
    const wrapper = shallow(<EmailPreview logo={logo} title={title} />);
    expect(wrapper.find('.pbg-email-preview-content').html()).to.include(title);
  });

  it('should render the email content if given', () => {
    const content = 'This is the email content';
    const wrapper = shallow(<EmailPreview logo={logo} title={title} content={content} />);
    expect(wrapper.find('.pbg-email-preview-content').html()).to.include(content);
  });

  it('should truncate the title if longer than 30 characters', () => {
    const longTitle = 'Lorem ipsum dolor sit amet posuere';
    const truncatedTitle = 'Lorem ipsum dolor sit amet ...';
    const wrapper = shallow(<EmailPreview logo={logo} title={longTitle} />);
    expect(wrapper.find('.pbg-email-preview-content').html()).to.include(truncatedTitle);
  });
});
