import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import SectionCard from '../../../components/consumer/mobile/section-card';
import { sectionCardStatus } from '../../../components/consumer/mobile/section-card/constants';
import { SmallFacebookButton } from '../../../components/consumer/mobile/button';

describe('section-card', () => {
  it('should have correct class names', () => {
    const wrapper = shallow(<SectionCard />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-section-card')).to.be.true;
  });

  it('should have a className if provided', () => {
    const className = 'className';
    const wrapper = shallow(<SectionCard className={className} />);

    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should show step number when not completed', () => {
    const wrapper = shallow(<SectionCard status={sectionCardStatus.ACTIVE} stepNumber={1} />);
    expect(wrapper.find('.pbg-section-card-step-number').length).to.equal(1);
    expect(wrapper.find('.pbg-section-card-step-number').text()).to.equal(`${1}.`);
  });

  it('should show completed icon completed', () => {
    const wrapper = shallow(<SectionCard status={sectionCardStatus.COMPLETED} stepNumber={1} />);
    expect(wrapper.find('.pbg-section-card-step-number').length).to.equal(0);
    expect(wrapper.find('.pbg-section-card-completed-icon').length).to.equal(1);
  });

  it('should show title', () => {
    const title = 'title';
    const wrapper = shallow(<SectionCard status={sectionCardStatus.COMPLETED} title={title} />);
    expect(wrapper.find('.pbg-section-card-title').length).to.equal(1);
    expect(wrapper.find('.pbg-section-card-title').text()).to.equal(title);
  });

  it('should show completed label when completed', () => {
    const label = 'label';
    const wrapper = shallow(<SectionCard status={sectionCardStatus.COMPLETED} completedLabel={label} />);
    expect(wrapper.find('.pbg-section-card-completed-label').length).to.equal(1);
    expect(wrapper.find('.pbg-section-card-completed-label').text()).to.equal(label);
  });

  it('should not show completed label when not completed', () => {
    const label = 'label';
    const wrapper = shallow(<SectionCard status={sectionCardStatus.ACTIVE} completedLabel={label} />);
    expect(wrapper.find('.pbg-section-card-completed-label').length).to.equal(0);
  });

  it('should show children when not completed', () => {
    const label = 'label';
    const wrapper = shallow(<SectionCard status={sectionCardStatus.ACTIVE} completedLabel={label}>something</SectionCard>);
    expect(wrapper.find('.pbg-section-card-content').length).to.equal(1);
  });

  it('should not show children when completed', () => {
    const label = 'label';
    const wrapper = shallow(<SectionCard status={sectionCardStatus.COMPLETED} completedLabel={label} />);
    expect(wrapper.find('.pbg-section-card-content').length).to.equal(0);
  });

  it('should render button correctly and work when active', () => {
    const buttonText = 'buttonText';
    const clickHandler = sinon.spy();
    const wrapper = shallow(
      <SectionCard
        status={sectionCardStatus.ACTIVE}
        stepNumber={1}
        headerButton={SmallFacebookButton}
        activateButtonText={buttonText}
        onActivateButtonClick={clickHandler}
      />
    );

    const btn = wrapper.find(SmallFacebookButton);

    btn
      .dive()
      .find('button')
      .simulate('click');

    expect(btn.length).to.equal(1);
    expect(btn.prop('children')).to.equal(buttonText);
    expect(clickHandler.calledOnce).to.be.true;
  });

  it('should render button correctly and work when completed', () => {
    const buttonText = 'buttonText';
    const clickHandler = sinon.spy();
    const wrapper = shallow(
      <SectionCard
        status={sectionCardStatus.COMPLETED}
        stepNumber={1}
        headerButton={SmallFacebookButton}
        activateButtonText={buttonText}
        onActivateButtonClick={clickHandler}
      />
    );

    const btn = wrapper.find(SmallFacebookButton);

    btn
      .dive()
      .find('button')
      .simulate('click');

    expect(btn.length).to.equal(1);
    expect(btn.prop('children')).to.equal(buttonText);
    expect(clickHandler.calledOnce).to.be.true;
  });

  it('should render button correctly and be disabled when disabled', () => {
    const buttonText = 'buttonText';
    const clickHandler = sinon.spy();
    const wrapper = shallow(
      <SectionCard
        status={sectionCardStatus.DISABLED}
        stepNumber={1}
        headerButton={SmallFacebookButton}
        activateButtonText={buttonText}
        onActivateButtonClick={clickHandler}
      />
    );

    const btn = wrapper.find(SmallFacebookButton);

    expect(btn.length).to.equal(0);
    expect(wrapper.find('.pbg-section-card-content').length).to.equal(0);
    expect(clickHandler.calledOnce).to.be.false;
  });
});
