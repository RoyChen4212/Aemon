import React from 'react';
import { shallow, mount } from 'enzyme';
import Popover from '../../../components/consumer/desktop/popover';

describe('Popover', () => {
  it('should render trigger', () => {
    const wrapper = mount(<Popover trigger={() => <div className="child">I am child</div>} />);
    expect(wrapper.find('.child')).to.have.lengthOf(1);
  });

  it('should render popover element', () => {
    const wrapper = shallow(<Popover />);
    expect(wrapper.find('.pbg-popover')).to.have.lengthOf(1);
  });

  it('should render popover content inside of popover element', () => {
    const content = <div>I am content</div>;
    const wrapper = shallow(<Popover content={content} />);
    expect(wrapper.find('.pbg-popover').contains(content)).to.be.true;
  });

  it('should add class pbg-popover-active to popover element on click', done => {
    const trigger = ({ onClick }) => <a onClick={onClick}>Click Me</a>;
    const wrapper = mount(<Popover trigger={trigger} content={<div>I am content</div>} />);
    wrapper.find('a').simulate('click');
    setTimeout(() => {
      expect(
        wrapper
          .find('.pbg-popover')
          .at(0)
          .hasClass('pbg-popover-active')
      ).to.be.true;
      done();
    });
  });

  it('should deactivate when clicked outside', done => {
    const trigger = ({ onClick }) => <a onClick={onClick}>Click Me</a>;
    const wrapper = mount(
      <div className="wrapper">
        <Popover trigger={trigger} content={<div>I am content</div>} />
      </div>
    );
    wrapper.find('a').simulate('click');
    setTimeout(() => {
      wrapper
        .find(Popover)
        .instance()
        .deactivateIfClickOutside({ target: <div /> });
      expect(wrapper.find(Popover).instance().active).to.be.false;
      done();
    });
  });

  it('should not deactivate when clicked inside', done => {
    const trigger = ({ onClick }) => <a onClick={onClick}>Click Me</a>;
    const content = <div className="content">I am content</div>;
    const wrapper = mount(<Popover trigger={trigger} content={content} />);
    wrapper.find('a').simulate('click');
    setTimeout(() => {
      wrapper.find('.content').simulate('click');
      expect(wrapper.find(Popover).instance().active).to.be.true;
      done();
    });
  });
});
