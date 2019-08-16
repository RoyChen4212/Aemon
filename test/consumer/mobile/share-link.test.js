import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import ShareLink from '../../../components/consumer/mobile/share-link';

describe('share-link', () => {
  it('should have correct class names', () => {
    const label = 'label';
    const wrapper = shallow(<ShareLink label={label} />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-share-link')).to.be.true;
  });

  it('should have correct link', () => {
    const label = 'label';
    const wrapper = shallow(<ShareLink label={label} />);
    expect(wrapper.find('.pbg-mobile-label-normal').text()).to.equal(label);
  });

  describe('autoselect with window.getSelection and document.createRange support', () => {
    let window;
    let document;

    const simpleMocks = {
      selectNodeContents: sinon.spy(),
      removeAllRanges: sinon.spy(),
      addRange: sinon.spy(),
    };

    const createRangeMock = {
      method: () => ({
        selectNodeContents: simpleMocks.selectNodeContents,
      }),
    };

    const getSelectionMock = {
      method: () => ({
        removeAllRanges: simpleMocks.removeAllRanges,
        addRange: simpleMocks.addRange,
      }),
    };

    const mocks = {
      getSelection: sinon.spy(getSelectionMock, 'method'),
      createRange: sinon.spy(createRangeMock, 'method'),
    };

    beforeEach(() => {
      window = global.window;
      document = global.document;

      global.window = {
        getSelection: mocks.getSelection,
      };

      global.document = {
        createRange: mocks.createRange,
      };
    });

    afterEach(() => {
      global.window = window;
      global.document = document;
    });

    it('should autoselect link on click on browsers with window.getSelection and document.createRange support', () => {
      const label = 'label';
      const wrapper = shallow(<ShareLink label={label} />);
      wrapper.find('.pbg-mobile-label-normal').simulate('click', { target: '' });

      expect(mocks.createRange.calledOnce).to.be.true;
      expect(mocks.getSelection.calledOnce).to.be.true;
      expect(simpleMocks.selectNodeContents.calledOnce).to.be.true;
      expect(simpleMocks.removeAllRanges.calledOnce).to.be.true;
      expect(simpleMocks.addRange.calledOnce).to.be.true;
    });
  });

  describe('autoselect with window.getSelection and document.createRange support', () => {
    let document;

    const simpleMocks = {
      moveToElementText: sinon.spy(),
      select: sinon.spy(),
    };

    const createTextRangeMock = {
      method: () => ({
        moveToElementText: simpleMocks.moveToElementText,
        select: simpleMocks.select,
      }),
    };

    const mocks = {
      createTextRange: sinon.spy(createTextRangeMock, 'method'),
    };

    beforeEach(() => {
      document = global.document;

      global.document = {
        selection: 'something',
        body: {
          createTextRange: mocks.createTextRange,
        },
      };
    });

    afterEach(() => {
      global.document = document;
    });

    it('should autoselect link on click on browsers with document.selection && document.body.createTextRange support', () => {
      const label = 'label';
      const wrapper = shallow(<ShareLink label={label} />);
      wrapper.find('.pbg-mobile-label-normal').simulate('click', { target: '' });

      expect(mocks.createTextRange.calledOnce).to.be.true;
      expect(simpleMocks.moveToElementText.calledOnce).to.be.true;
      expect(simpleMocks.select.calledOnce).to.be.true;
    });
  });
});
