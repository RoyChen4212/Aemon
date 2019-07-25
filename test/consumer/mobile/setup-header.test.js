import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import SetupHeader from '../../../components/consumer/mobile/setup-header';
import StepProgressBar from '../../../components/consumer/mobile/step-progress-bar';

describe('SetupHeader', () => {
  const label = 'Maui Weekend Trip';
  const viewInfoText = 'View Info';
  const hideInfoText = 'Hide Info';

  it('should have correct classes', () => {
    const wrapper = shallow(<SetupHeader label={label} viewInfoText={viewInfoText} hideInfoText={hideInfoText} />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-setup-header')).to.be.true;
  });

  it('should display label', () => {
    const wrapper = shallow(<SetupHeader label={label} viewInfoText={viewInfoText} hideInfoText={hideInfoText} />);
    expect(wrapper.find('.pbg-setup-header-text').html()).to.contain(label);
  });

  it('should display hint', () => {
    const hint = 'This is a hint';
    const wrapper = shallow(
      <SetupHeader label={label} viewInfoText={viewInfoText} hideInfoText={hideInfoText} hint={hint} />
    );
    expect(wrapper.find('.pbg-setup-header-text').html()).to.contain(hint);
  });

  it('should not display progress bar if stepCount is not given', () => {
    const wrapper = shallow(<SetupHeader label={label} viewInfoText={viewInfoText} hideInfoText={hideInfoText} />);
    expect(wrapper.find(StepProgressBar)).to.have.lengthOf(0);
  });

  it('should display progress bar if stepCount is given', () => {
    const wrapper = shallow(
      <SetupHeader label={label} viewInfoText={viewInfoText} hideInfoText={hideInfoText} stepCount={5} />
    );
    expect(wrapper.find(StepProgressBar)).to.have.lengthOf(1);
  });

  it('should toggle button text upon click', () => {
    const wrapper = mount(<SetupHeader label={label} viewInfoText={viewInfoText} hideInfoText={hideInfoText} />);
    expect(wrapper.find('.pbg-button').html()).to.contain(viewInfoText);
    wrapper.find('.pbg-button').simulate('click');
    expect(wrapper.find('.pbg-button').html()).to.contain(hideInfoText);
  });

  it('should toggle button icon upon click', () => {
    const wrapper = mount(<SetupHeader label={label} viewInfoText={viewInfoText} hideInfoText={hideInfoText} />);
    expect(wrapper.find('i').html()).to.contain('arrow-down');
    wrapper.find('.pbg-button').simulate('click');
    expect(wrapper.find('i').html()).to.contain('arrow-up');
  });

  it('should toggle content upon button click', () => {
    const content = 'This is the content';
    const wrapper = mount(
      <SetupHeader label={label} viewInfoText={viewInfoText} hideInfoText={hideInfoText}>
        <p>{content}</p>
      </SetupHeader>
    );
    expect(wrapper.find('.pbg-setup-header-content')).to.have.lengthOf(1);
    expect(wrapper.find('.pbg-setup-header-content.expanded')).to.have.lengthOf(0);

    wrapper.find('.pbg-button').simulate('click');
    expect(wrapper.find('.pbg-setup-header-content').hasClass('expanded')).to.be.true;

    wrapper.find('.pbg-button').simulate('click');
    expect(wrapper.find('.pbg-setup-header-content').hasClass('expanded')).to.be.false;
  });
});
