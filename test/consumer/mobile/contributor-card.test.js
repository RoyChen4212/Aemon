import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import ContributorCard from '../../../components/consumer/mobile/contributor-card';
import { H2 } from '../../../components/consumer/mobile/heading';
import Hint from '../../../components/consumer/mobile/hint';
import { LinkButton } from '../../../components/consumer/mobile/button';
import { HistoricalPicker } from '../../../components/consumer/mobile/historical-picker';

describe('ContributorCard Card', () => {
  it('should have correct class', () => {
    const wrapper = shallow(<ContributorCard />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
    expect(wrapper.hasClass('pbg-contributor-card')).to.be.true;
  });

  it('should accept a type and give it a class for it', () => {
    const wrapper = shallow(<ContributorCard type={ContributorCard.types.error} />);
    expect(wrapper.hasClass('pbg-contributor-card-type-error')).to.be.true;
  });

  it('should give a default className "notice" when no type', () => {
    const wrapper = shallow(<ContributorCard />);
    expect(wrapper.hasClass('pbg-contributor-card-type-notice')).to.be.true;
  });

  it('should have no heading if prop not present', () => {
    const expected = 'Oh no!';
    const wrapper = shallow(<ContributorCard />);
    expect(wrapper.find('.pbg-contributor-card-heading')).to.have.lengthOf(0);
  });

  it('should accept a heading prop and render it', () => {
    const expected = 'Oh no!';
    const wrapper = shallow(<ContributorCard heading={expected} />);
    expect(wrapper.find('.pbg-contributor-card-heading').text()).to.equal(expected);
  });

  it('should render a card body element', () => {
    const wrapper = shallow(<ContributorCard />);
    expect(wrapper.find('.pbg-contributor-card-body')).to.have.lengthOf(1);
  });

  it('should accept a title prop and render it', () => {
    const expected = 'Some title';
    const wrapper = shallow(<ContributorCard title={expected} />);
    expect(wrapper.contains(<H2>{expected}</H2>)).to.be.true;
  });

  it('should accept a content prop and render it', () => {
    const expected = <p>This is some text to be passed to the content portion</p>;
    const wrapper = mount(<ContributorCard content={expected} />);
    expect(wrapper.find('.pbg-contributor-card-content').contains(expected)).to.be.true;
  });

  it('should render cta section', () => {
    const wrapper = shallow(<ContributorCard />);
    expect(wrapper.find('.pbg-contributor-card-ctas')).to.have.lengthOf(1);
  });

  it('should accept cta array prop and render them', () => {
    const onClick = () => {};
    const cta = [{ label: 'CTA one', onClick }, { label: 'CTA 2', onClick }];
    const wrapper = shallow(<ContributorCard cta={cta} />);
    expect(wrapper.find(LinkButton)).to.have.lengthOf(2);
  });

  it('should wrap each cta on a container if more than 1 cta', () => {
    const onClick = () => {};
    const cta = [{ label: 'CTA one', onClick }, { label: 'CTA 2', onClick }];
    const wrapper = shallow(<ContributorCard cta={cta} />);
    expect(wrapper.find('.cta-container')).to.have.lengthOf(2);
  });

  it('should not wrap cta on a container if just 1 cta', () => {
    const onClick = () => {};
    const cta = [{ label: 'CTA one', onClick }];
    const wrapper = shallow(<ContributorCard cta={cta} />);
    expect(wrapper.find('.cta-container')).to.have.lengthOf(0);
  });

  it('should give correct click handler to each cta', () => {
    const onClick = sinon.spy();
    const onClick2 = sinon.spy();
    const cta = [{ label: 'CTA one', onClick }, { label: 'CTA 2', onClick: onClick2 }];
    const wrapper = shallow(<ContributorCard cta={cta} />);
    wrapper
      .find(LinkButton)
      .at(0)
      .simulate('click');
    expect(onClick.calledOnce).to.be.true;
    expect(onClick2.calledOnce).to.be.false;
    wrapper
      .find(LinkButton)
      .at(1)
      .simulate('click');
    expect(onClick2.calledOnce).to.be.true;
  });

  it('should accept type picker as cta', () => {
    const onClick = () => {};
    const cta = [{ label: 'CTA one', onClick }, { label: 'CTA 2', onChange: onClick, type: 'picker' }];
    const wrapper = shallow(<ContributorCard cta={cta} />);
    expect(wrapper.find(LinkButton)).to.have.lengthOf(1);
    expect(wrapper.find(HistoricalPicker)).to.have.lengthOf(1);
  });

  it('should render picker all options', () => {
    const cta = [
      {
        label: 'Picker',
        options: [{ label: 'one', value: '1' }, { label: 'two', value: '2' }],
        type: 'picker',
      },
    ];
    const wrapper = mount(<ContributorCard cta={cta} />);
    expect(wrapper.find(HistoricalPicker).find('option')).to.have.lengthOf(2);
  });

  it('should execute onChange from picker', () => {
    const onChange = sinon.spy();
    const cta = [
      {
        label: 'Picker',
        options: [{ label: 'one', value: '1' }, { label: 'two', value: '2' }],
        onChange,
        type: 'picker',
      },
    ];
    const wrapper = mount(<ContributorCard cta={cta} />);
    wrapper
      .find(HistoricalPicker)
      .find('select')
      .simulate('change');
    expect(onChange.calledOnce).to.be.true;
  });
});
