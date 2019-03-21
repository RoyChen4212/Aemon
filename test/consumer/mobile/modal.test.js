import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Modal from '../../../components/consumer/mobile/modal';
import { H2 } from '../../../components/consumer/mobile/heading';
import {
  LinkButton, PrimaryButton, SecondaryButton, types
} from '../../../components/consumer/mobile/button';

describe('Modal', () => {
  it('should have correct class', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-modal')).to.be.true;
  });

  describe('Heading', () => {
    it('should have a heading', () => {
      const wrapper = shallow(<Modal />);
      expect(wrapper.find('.pbg-modal-heading')).to.have.lengthOf(1);
    });

    it('should accept a title prop and render it', () => {
      const expected = "I am a title";
      const wrapper = shallow(<Modal title={expected} />);
      expect(wrapper.find('.pbg-modal-heading').contains(<H2>{expected}</H2>)).to.be.true;
    });

    it('should have a back button', () => {;
      const wrapper = mount(<Modal backButtonCaption="Back" onBackClick={() => {}} />);
      expect(wrapper.find('.pbg-modal-heading').find(LinkButton)).to.have.lengthOf(1);
    });

    it('should accept a backButtonCaption prop and use it within the button', () => {
      const expected = 'Back';
      const wrapper = mount(<Modal backButtonCaption={expected} />);
      expect(wrapper.find('.pbg-modal-heading').find(LinkButton).text()).to.equal(expected);
    });

    it('should accept a onBackClick prop and use it as handler in the button', () => {
      const onBackClick = sinon.spy();
      const wrapper = shallow(<Modal onBackClick={onBackClick} />);
      wrapper.find('.pbg-modal-heading').find(LinkButton).simulate('click');
      expect(onBackClick.calledOnce).to.be.true;
    });

    it('should not break when onBackClick is not present', () => {
      const wrapper = shallow(<Modal />);
      expect(() => {
        wrapper.find('.pbg-modal-heading').find(LinkButton).simulate('click');
      }).not.to.throw;
    });
  });

  describe('Body', () => {
    it('should have a modal body', () => {
      const wrapper = shallow(<Modal />);
      expect(wrapper.find('.pbg-modal-body')).to.have.lengthOf(1);
    });

    it('should render whatever content you give it', () => {
      const content = <div><H2>A title</H2><p>Some text here</p></div>;
      const wrapper = shallow(<Modal>{content}</Modal>);
      expect(wrapper.find('.pbg-modal-body').contains(content)).to.be.true;
    });
  });

  describe('CTA', () => {
    it('should not have a cta section if cta prop is missing', () => {
      const wrapper = shallow(<Modal />);
      expect(wrapper.find('.pbg-modal-cta')).to.have.lengthOf(0);
    });

    it('should not have a cta section if cta prop is empty array', () => {
      const wrapper = shallow(<Modal />);
      expect(wrapper.find('.pbg-modal-cta')).to.have.lengthOf(0);
    });

    it('should have a cta section if cta prop is passed', () => {
      const wrapper = shallow(<Modal cta={[{ label: 'CTA' }]}/>);
      expect(wrapper.find('.pbg-modal-cta')).to.have.lengthOf(1);
    });

    it('should render one button if one is passed', () => {
      const wrapper = shallow(<Modal cta={[{ label: 'CTA' }]} />);
      expect(wrapper.find('.pbg-modal-cta').find(PrimaryButton)).to.have.lengthOf(1);
    });

    it('should render two buttons with correct type if passed', () => {
      const ctaConfig = [
        { label: 'Yes', type: types.SECONDARY },
        { label: 'No', type: types.LINK },
        { label: 'Maybe', type: types.PRIMARY }
      ];
      const wrapper = shallow(<Modal cta={ctaConfig} />);
      expect(wrapper.find('.pbg-modal-cta').find(LinkButton)).to.have.lengthOf(1);
      expect(wrapper.find('.pbg-modal-cta').find(SecondaryButton)).to.have.lengthOf(1);
      expect(wrapper.find('.pbg-modal-cta').find(PrimaryButton)).to.have.lengthOf(1);
    });

    it('should add a last className to last button to be rendered', () => {
      const ctaConfig = [{ label: 'Yes', type: types.SECONDARY }, { label: 'No', type: types.LINK }];
      const wrapper = shallow(<Modal cta={ctaConfig} />);
      expect(wrapper.find('.pbg-modal-cta').find(SecondaryButton).hasClass('last')).to.be.false;
      expect(wrapper.find('.pbg-modal-cta').find(LinkButton).hasClass('last')).to.be.true;
    });
  });
});
