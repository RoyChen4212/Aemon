import React from 'react';
import { mount, shallow } from 'enzyme';
import times from 'lodash/times';
import first from 'lodash/first';
import Avatar from '../../../components/consumer/shared/avatar';
import defaults from '../../../components/consumer/shared/avatar/defaults';

describe('Avatar', () => {
  const src = 'https://myimage.com';

  describe('Props', () => {
    it('should pass "src" prop as attribute for the <img> tag', () => {
      const wrapper = shallow(<Avatar src={src} />);

      expect(wrapper.find('img').prop('src')).to.equal(src);
    });

    it('should set "size" prop as width and height', () => {
      const size = 68;
      const wrapper = shallow(<Avatar src={src} size={size} />);
      const img = wrapper.find('img');

      expect(img.prop('width')).to.equal(size);
      expect(img.prop('height')).to.equal(size);
    });

    it('should set default size if none is passed', () => {
      const wrapper = shallow(<Avatar src={src} />);
      const img = wrapper.find('img');

      expect(img.prop('width')).to.equal(Avatar.DEFAULT_SIZE);
      expect(img.prop('height')).to.equal(Avatar.DEFAULT_SIZE);
    });
  });

  describe('CSS classes', () => {
    it('should add proper class to <img> tag', () => {
      const wrapper = shallow(<Avatar src={src} />);
      expect(wrapper.hasClass('pbg-avatar')).to.be.true;
    });

    it('should pass additional css class', () => {
      const expected = 'additional-class';
      const wrapper = shallow(<Avatar className={expected} />);
      expect(wrapper.hasClass('pbg-avatar')).to.be.true;
      expect(wrapper.hasClass(expected)).to.be.true;
    });
  });

  describe('Initials Strategy', () => {
    it('should render a fallback avatar with 2 initial letters', () => {
      const wrapper = mount(<Avatar fullName="John Doe" />);

      expect(wrapper.find('div > div').html()).to.contain('JD');
    });

    it('should render a fallback avatar with 1 initial letter', () => {
      const wrapper = mount(<Avatar fullName="John@example.com" />);

      expect(wrapper.find('div > div').html()).to.contain('J');
    });
  });

  describe('Fallback strategy', () => {
    const getRenderedSVGPath = userId => {
      const wrapper = mount(<Avatar src={src} />);
      wrapper.find('img').simulate('error');
      return wrapper.find('svg > path:first-child');
    };

    it('should render a properly sized fallback avatar if image fails to load', () => {
      const wrapper = mount(<Avatar src={src} />);
      wrapper.find('img').simulate('error');

      expect(wrapper.find('img').exists()).to.be.false;

      const svg = wrapper.find('svg');
      expect(svg.exists()).to.be.true;
      expect(svg.prop('width')).to.be.equal(Avatar.DEFAULT_SIZE);
      expect(svg.prop('height')).to.be.equal(Avatar.DEFAULT_SIZE);
      expect(svg.prop('viewBox')).to.be.equal(`0 0 32 32`);
    });

    it('should consistently render the same fallback avatar and color for the same user’s id', () => {
      const RUNS_FOR_ID = 3;
      const avatarPropsById = {
        '01234567-abcd-abcd-abcd-0123456789ab': null,
        '0bc96121-c5a3-4b4d-9485-d7631ed4cf5e': null,
        '179f26ed-7988-4975-a3aa-27305ab856d1': null,
      };
      const ids = Object.keys(avatarPropsById);

      ids.reduce((result, id) => {
        const path = getRenderedSVGPath(id);
        result[id] = {
          color: path.prop('fill'),
        };
        return result;
      }, avatarPropsById);

      ids.forEach(id => {
        times(RUNS_FOR_ID, () => {
          const path = getRenderedSVGPath(id);
          const values = avatarPropsById[id];

          expect(values.color).to.exist;
          expect(values.color).to.be.equal(path.prop('fill'));
        });
      });
    });

    it('should render fallback avatar using the first shape and color from default values if no userId is passed', () => {
      const path = getRenderedSVGPath();
      const expectedColor = defaults.colors[0];

      expect(path.prop('fill')).to.be.equal(expectedColor);
    });
  });
});
