import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import SecondaryModal from '../../../components/consumer/desktop/secondary-modal';

describe('secondary-modal', () => {
  const contentClass = '.pbg-modal-content';

  it('should have correct class', () => {
    const wrapper = shallow(<SecondaryModal />);
    expect(wrapper.hasClass('pbg-secondary-modal')).to.be.true;
  });

  it('should have a title if it is given', () => {
    const title = 'Modal title';
    const wrapper = shallow(<SecondaryModal title={title} />);
    expect(wrapper.find(contentClass).contains(title)).to.be.true;
  });

  it('should have an icon if iconType is given', () => {
    const wrapper = shallow(<SecondaryModal iconType="rocket" />);
    expect(wrapper.find('.pbg-modal-icon')).to.have.lengthOf(1);
  });

  it('should have a content section', () => {
    const wrapper = shallow(
      <SecondaryModal>
        <p>Modal content</p>
      </SecondaryModal>
    );
    expect(wrapper.find(contentClass)).to.have.lengthOf(1);
  });

  it('should render given children in content', () => {
    const expected = <div>Some content</div>;
    const wrapper = shallow(<SecondaryModal>{expected}</SecondaryModal>);
    expect(wrapper.find(contentClass).contains(expected)).to.be.true;
  });
});
