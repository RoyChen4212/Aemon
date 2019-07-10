import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Overlay from '../../../components/consumer/mobile/overlay';

describe('Overlay', () => {
  it ('Should have correct class name', () => {
    const wrapper = shallow(<Overlay title="Title" opened={true} onBackButtonClick={() => null} />);
    expect(wrapper.hasClass('pbg-overlay-container')).to.be.true;
  });

  it('Should have \'open\' class when Overlay opened', () => {
    const wrapper = shallow(<Overlay title="Title" opened={true} onBackButtonClick={() => null} />);
    expect(wrapper.hasClass('open')).to.be.true;
  });

  it('Should\'n have \'open\' class when Overlay closed', () => {
    const wrapper = shallow(<Overlay title="Title" opened={false} onBackButtonClick={() => null} />);
    expect(wrapper.hasClass('open')).to.be.false;
  });

  it('Should render the correct title', () => {
    const title = 'Title';
    const wrapper = shallow(<Overlay title={title} opened={true} onBackButtonClick={() => null} />);
    expect(wrapper.find('.pbg-overlay').contains(<div className="pbg-mobile-heading-1">{title}</div>)).to.be.true;
  });

  it('Should render the back button in header', () => {
    const onBackButtonClick = () => null;
    const wrapper = shallow(<Overlay title="Title" opened={true} onBackButtonClick={onBackButtonClick} />);
    expect(wrapper.find('.pbg-overlay--header').contains(<div className="pbg-mobile-label-link" onClick={onBackButtonClick}>&#60; Back</div>)).to.be.true;
  });

  it('Should render Back button in footer', () => {
    const onBackButtonClick = () => null;
    const wrapper = shallow(<Overlay title="Title" opened={true} onBackButtonClick={onBackButtonClick} />);
    expect(wrapper.find('.pbg-overlay--footer').contains(<div className="pbg-mobile-label-link" onClick={onBackButtonClick}>&#60; Back</div>)).to.be.true;
  });

  it('\'onBackButtonClick\' event should be triggered when header back button clicked', done => {
    const onBackButtonClick = () => {
      done();
    };
    const wrapper = shallow(<Overlay title="Title" opened={true} onBackButtonClick={onBackButtonClick} />);
    wrapper
    .find('.pbg-overlay--header')
    .find('.pbg-mobile-label-link')
    .simulate('click');
  });

  it('\'onBackButtonClick\' event should be triggered when footer back button clicked', done => {
    const onBackButtonClick = () => {
      done();
    };
    const wrapper = shallow(<Overlay title="Title" opened={true} onBackButtonClick={onBackButtonClick} />);
    wrapper
    .find('.pbg-overlay--footer')
    .find('.pbg-mobile-label-link')
    .simulate('click');
  });


});
