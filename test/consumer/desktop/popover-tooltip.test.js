import React from 'react';
import { shallow, mount } from 'enzyme';
import PopoverTooltip from '../../../components/consumer/desktop/popover-tooltip';

describe('PopoverTooltip', () => {
  it('should render trigger', () => {
    const wrapper = mount(<PopoverTooltip trigger={() => <div className="child">I am child</div>} />);
    expect(wrapper.find('.child')).to.have.lengthOf(1);
  });

  it('should render popover element', () => {
    const wrapper = shallow(<PopoverTooltip />);
    expect(wrapper.find('.pbg-popover-tooltip')).to.have.lengthOf(1);
  });

  it('should render popover content inside of popover element', () => {
    const content = <div>I am content</div>;
    const wrapper = shallow(<PopoverTooltip content={content} />);
    expect(wrapper.find('.pbg-popover-tooltip').contains(content)).to.be.true;
  });

  it('should add class pbg-popover-active to popover element on mouseenter', done => {
    const trigger = ({ onMouseEnter }) => <a onMouseEnter={onMouseEnter}>Put pointer over Me</a>;
    const wrapper = mount(<PopoverTooltip trigger={trigger} content={<div>I am content</div>} />);
    wrapper.find('a').simulate('mouseenter');
    setTimeout(() => {
      expect(
        wrapper
          .find('.pbg-popover-tooltip')
          .at(0)
          .hasClass('pbg-popover-active')
      ).to.be.true;
      done();
    });
  });

  it('should deactivate when mouseleave', done => {
    const trigger = ({ onMouseEnter }) => <a onMouseEnter={onMouseEnter}>Put pointer over Me</a>;
    const wrapper = mount(
      <div className="wrapper">
        <PopoverTooltip trigger={trigger} content={<div>I am content</div>} />
      </div>
    );
    wrapper.find('a').simulate('mouseleave');
    setTimeout(() => {
      wrapper
        .find(PopoverTooltip)
        .instance()
        .deactivateIfClickOutside({ target: <div /> });
      expect(wrapper.find(PopoverTooltip).instance().active).to.be.false;
      done();
    });
  });
});
