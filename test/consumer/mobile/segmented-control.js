import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import SegmentedControl from '../../../components/consumer/mobile/segmented-control';

describe('Segmented Control', () => {
  it('should have mobile namespace class', () => {
    const wrapper = shallow(<SegmentedControl />);
    expect(wrapper.hasClass('pbg-consumer-mobile')).to.be.true;
  });

  it('should have pbg-segmented-control class', () => {
    const wrapper = shallow(<SegmentedControl />);
    expect(wrapper.hasClass('pbg-segmented-control')).to.be.true;
  });

  it('should contain two segments', () => {
    const wrapper = shallow(<SegmentedControl />);
    expect(wrapper.find('.pbg-segmented-control-button')).to.have.lengthOf(2);
  });

  it('should pass label to segments', () => {
    const one = 'one';
    const two = 'two';
    const segments = [{ label: one }, { label: two }];
    const wrapper = shallow(<SegmentedControl segments={segments} />);
    expect(
      wrapper
        .find('.pbg-segmented-control-button')
        .at(0)
        .text()
    ).to.equal(one);
    expect(
      wrapper
        .find('.pbg-segmented-control-button')
        .at(1)
        .text()
    ).to.equal(two);
  });

  it('should expose types object', () => {
    expect(SegmentedControl.types).to.be.an('object');
  });

  it('should pass type to segments', () => {
    const segments = [{ type: SegmentedControl.types.list }, { type: SegmentedControl.types.pulse }];
    const wrapper = shallow(<SegmentedControl segments={segments} />);
    expect(
      wrapper
        .find('.pbg-segmented-control-button')
        .at(0)
        .hasClass('list')
    ).to.be.true;
    expect(
      wrapper
        .find('.pbg-segmented-control-button')
        .at(1)
        .hasClass('pulse')
    ).to.be.true;
  });

  it('should activate first segment by default', function(done) {
    const segments = [{ type: SegmentedControl.types.list }, { type: SegmentedControl.types.pulse }];
    const onChange = ev => {
      expect(ev.target.value).to.equal(0);
      done();
    };
    const wrapper = shallow(<SegmentedControl segments={segments} onChange={onChange} />);
  });

  it('should activate correct segment according to configuration', function(done) {
    const segments = [{ type: SegmentedControl.types.list }, { type: SegmentedControl.types.pulse, active: true }];
    const onChange = ev => {
      expect(ev.target.value).to.equal(1);
      done();
    };
    const wrapper = shallow(<SegmentedControl segments={segments} onChange={onChange} />);
  });

  it('should call onChange with correct index upon clicking a segment', function(done) {
    const segments = [{ type: SegmentedControl.types.list }, { type: SegmentedControl.types.pulse }];
    let times = 0;
    const onChange = ev => {
      if (times > 0) {
        expect(ev.target.value).to.equal(1);
        return done();
      }
      times++;
    };
    const wrapper = shallow(<SegmentedControl segments={segments} onChange={onChange} />);
    wrapper
      .find('.pbg-segmented-control-button')
      .at(1)
      .simulate('click');
  });

  it('should mark as active the correct initial segment', () => {
    const segments = [{ type: SegmentedControl.types.list }, { type: SegmentedControl.types.pulse, active: true }];
    const wrapper = shallow(<SegmentedControl segments={segments} />);
    expect(
      wrapper
        .find('.pbg-segmented-control-button')
        .at(1)
        .hasClass('active')
    ).to.be.true;
  });

  it('should change active mark upon clicking the segment', () => {
    const segments = [{ type: SegmentedControl.types.list }, { type: SegmentedControl.types.pulse, active: true }];
    const wrapper = shallow(<SegmentedControl segments={segments} />);
    expect(
      wrapper
        .find('.pbg-segmented-control-button')
        .at(1)
        .hasClass('active')
    ).to.be.true;
    wrapper
      .find('.pbg-segmented-control-button')
      .at(0)
      .simulate('click');
    wrapper.update();
    expect(
      wrapper
        .find('.pbg-segmented-control-button')
        .at(0)
        .hasClass('active')
    ).to.be.true;
  });
});
