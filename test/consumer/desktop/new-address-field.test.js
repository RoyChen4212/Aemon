import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import NewAddressField from '../../../components/consumer/desktop/new-address-field';
import { addressFields } from '../../../components/consumer/mobile/new-address-field';
import Picker, { PICKER_EMPTY_VALUE } from '../../../components/consumer/desktop/picker';

const countries = [
  { label: { term: 'Choose...' }, value: PICKER_EMPTY_VALUE },
  { label: { term: 'United States' }, value: 'us' },
  { label: { term: 'Mexico' }, value: 'mx' },
  { label: { term: 'Denmark' }, value: 'dk' },
];

describe('NewAddressField', () => {
  it('should have correct class', () => {
    const wrapper = shallow(<NewAddressField />);
    expect(wrapper.hasClass('pbg-new-address-field')).to.be.true;
  });

  it('should have correct className when provided', () => {
    const className = 'className';
    const wrapper = shallow(<NewAddressField className={className} />);
    expect(wrapper.hasClass(className)).to.be.true;
  });

  it('should have label if given', () => {
    const label = 'a label';
    const wrapper = shallow(<NewAddressField label={label} />);
    expect(wrapper.find('.pbg-desktop-label-normal').text()).to.equal(label);
  });

  it('should have a hint if given', () => {
    const hint = 'some hint';
    const wrapper = shallow(<NewAddressField hint={hint} label="some label" />);
    expect(wrapper.find('.pbg-desktop-small-text').text()).to.equal(hint);
  });

  describe('Street Address Text Field', () => {
    it('should have an streetAddress TextField', () => {
      const wrapper = mount(<NewAddressField />);
      const streetAddress = wrapper.find({
        type: 'text',
        name: addressFields.STREET_ADDRESS,
      });
      expect(streetAddress).to.have.lengthOf(1);
    });

    it('should have an streetAddress TextField with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<NewAddressField labels={{ [addressFields.STREET_ADDRESS]: expected }} />);
      const streetAddress = wrapper.find({
        name: addressFields.STREET_ADDRESS,
        label: expected,
      });
      expect(streetAddress).to.have.lengthOf(1);
    });

    it('should pass the error to streetAddress TextField', () => {
      const expected = 'some error';
      const error = { [addressFields.STREET_ADDRESS]: expected };
      const wrapper = mount(<NewAddressField error={error} />);
      wrapper.setState({ [`${addressFields.STREET_ADDRESS}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.STREET_ADDRESS)).to.equal(expected);
      });
    });

    it('should pass the error to streetAddress TextField and display if forceErrorDisplay', () => {
      const expected = 'some error';
      const error = { [addressFields.STREET_ADDRESS]: expected };
      const wrapper = mount(<NewAddressField error={error} forceErrorDisplay label="some label" />);
      expect(wrapper.instance().extractError(addressFields.STREET_ADDRESS)).to.equal(expected);
    });

    it('should not pass an error to streetAddress TextField if it has none', () => {
      const wrapper = mount(<NewAddressField error={{ notOne: 'error' }} />);
      wrapper.setState({ [`${addressFields.STREET_ADDRESS}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.STREET_ADDRESS)).to.be.null;
      });
    });
  });

  describe('City Text Field', () => {
    it('should have an city TextField', () => {
      const wrapper = mount(<NewAddressField />);
      const city = wrapper.find({ type: 'text', name: addressFields.CITY });
      expect(city).to.have.lengthOf(1);
    });

    it('should have an city TextField with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<NewAddressField labels={{ [addressFields.CITY]: expected }} />);
      const city = wrapper.find({ name: addressFields.CITY, label: expected });
      expect(city).to.have.lengthOf(1);
    });

    it('should pass the error to city TextField', () => {
      const expected = 'some error';
      const error = { [addressFields.CITY]: expected };
      const wrapper = mount(<NewAddressField error={error} />);
      wrapper.setState({ [`${addressFields.CITY}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.CITY)).to.be.equal(expected);
      });
    });

    it('should pass the error to city TextField and display if forceErrorDisplay', () => {
      const expected = 'some error';
      const error = { [addressFields.CITY]: expected };
      const wrapper = mount(<NewAddressField error={error} forceErrorDisplay />);
      expect(wrapper.instance().extractError(addressFields.CITY)).to.equal(expected);
    });

    it('should not pass an error to city TextField if it has none', () => {
      const wrapper = shallow(<NewAddressField error={{ notOne: 'error' }} />);
      wrapper.setState({ [`${addressFields.CITY}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.CITY)).to.be.null;
      });
    });
  });

  describe('State Text Field', () => {
    it('should have an state TextField', () => {
      const wrapper = mount(<NewAddressField />);
      const state = wrapper.find({ type: 'text', name: addressFields.STATE });
      expect(state).to.have.lengthOf(1);
    });

    it('should have an state TextField with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<NewAddressField labels={{ [addressFields.STATE]: expected }} />);
      const state = wrapper.find({ name: addressFields.STATE, label: expected });
      expect(state).to.have.lengthOf(1);
    });

    it('should pass the error to state TextField', () => {
      const expected = 'some error';
      const error = { [addressFields.STATE]: expected };
      const wrapper = mount(<NewAddressField error={error} />);
      wrapper.setState({ [`${addressFields.STATE}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.STATE)).to.be.equal(expected);
      });
    });

    it('should pass the error to state TextField and display if forceErrorDisplay', () => {
      const expected = 'some error';
      const error = { [addressFields.STATE]: expected };
      const wrapper = mount(<NewAddressField error={error} forceErrorDisplay />);
      expect(wrapper.instance().extractError(addressFields.STATE)).to.equal(expected);
    });

    it('should not pass an error to state TextField if it has none', () => {
      const wrapper = shallow(<NewAddressField error={{ notOne: 'error' }} />);
      wrapper.setState({ [`${addressFields.STATE}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.STATE)).to.be.null;
      });
    });
  });

  describe('Postal Code Text Field', () => {
    it('should have an postal code TextField', () => {
      const wrapper = mount(<NewAddressField />);
      const postalCode = wrapper.find({
        type: 'text',
        name: addressFields.POSTAL_CODE,
      });
      expect(postalCode).to.have.lengthOf(1);
    });

    it('should have an postal code TextField with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<NewAddressField labels={{ [addressFields.POSTAL_CODE]: expected }} />);
      const postalCode = wrapper.find({
        name: addressFields.POSTAL_CODE,
        label: expected,
      });
      expect(postalCode).to.have.lengthOf(1);
    });

    it('should pass the error to postal code TextField', () => {
      const expected = 'some error';
      const error = { [addressFields.POSTAL_CODE]: expected };
      const wrapper = mount(<NewAddressField error={error} />);
      wrapper.setState({ [`${addressFields.POSTAL_CODE}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.POSTAL_CODE)).to.be.equal(expected);
      });
    });

    it('should pass the error to state TextField and display if forceErrorDisplay', () => {
      const expected = 'some error';
      const error = { [addressFields.POSTAL_CODE]: expected };
      const wrapper = mount(<NewAddressField error={error} forceErrorDisplay />);
      expect(wrapper.instance().extractError(addressFields.POSTAL_CODE)).to.equal(expected);
    });

    it('should not pass an error to postal code TextField if it has none', () => {
      const wrapper = shallow(<NewAddressField error={{ notOne: 'error' }} />);
      wrapper.setState({ [`${addressFields.POSTAL_CODE}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.POSTAL_CODE)).to.be.null;
      });
    });
  });

  describe('Country Picker', () => {
    it('should have an country Picker', () => {
      const wrapper = mount(<NewAddressField />);
      const country = wrapper.find(Picker);
      expect(country).to.have.lengthOf(1);
      expect(country.prop('name')).to.equal(addressFields.COUNTRY);
    });

    it('should have an country Picker with correct label', () => {
      const expected = 'expected label';
      const wrapper = mount(<NewAddressField labels={{ [addressFields.COUNTRY]: expected }} />);
      const country = wrapper.find(Picker);
      expect(country.prop('label')).to.be.equal(expected);
    });

    it('should pass the error to country Picker if it has one', () => {
      const expected = 'some error';
      const error = { [addressFields.COUNTRY]: expected };
      const wrapper = shallow(<NewAddressField error={error} />);
      wrapper.setState({ [`${addressFields.COUNTRY}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.COUNTRY)).to.be.equal(expected);
      });
    });

    it('should pass the error to country Picker and display if forceErrorDisplay', () => {
      const expected = 'some error';
      const error = { [addressFields.COUNTRY]: expected };
      const wrapper = mount(<NewAddressField error={error} forceErrorDisplay />);
      expect(wrapper.instance().extractError(addressFields.COUNTRY)).to.equal(expected);
    });

    it('should not pass an error to country Picker if it has none', () => {
      const wrapper = shallow(<NewAddressField error={{ notOne: 'error' }} />);
      expect(wrapper.instance().extractError(addressFields.COUNTRY)).to.be.null;
      wrapper.setState({ [`${addressFields.COUNTRY}Touched`]: true }, () => {
        expect(wrapper.instance().extractError(addressFields.COUNTRY)).to.be.null;
      });
    });

    it('should pass given options to country picker', () => {
      const options = [{ label: 'MX', value: 'mx' }, { label: 'US', value: 'us' }];
      const wrapper = shallow(<NewAddressField countryOptions={options} onChange={() => {}} />);
      expect(wrapper.instance().countryOptions).to.be.equal(options);
    });
  });

  describe('Composed behaviour', () => {
    describe('Updating value', () => {
      const initialValue = {
        streetAddress: 'Some address',
        city: 'Some city',
        state: 'Some state',
        postalCode: '00000',
        country: 'dk',
      };

      describe('Street Address', () => {
        it('should report correct value when streetAddress TextField changes', done => {
          const expected = { ...initialValue, streetAddress: '742 Evergreen Terrace' };
          const event = { target: { value: '742 Evergreen Terrace' } };
          const onChange = ev => {
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} value={initialValue} />);
          wrapper.find({ type: 'text', name: addressFields.STREET_ADDRESS }).simulate('change', event);
        });

        it('should pass streetAddress value to text input when given', () => {
          const wrapper = mount(<NewAddressField value={initialValue} />);
          expect(wrapper.find({ type: 'text', name: addressFields.STREET_ADDRESS }).prop('value')).to.equal(
            initialValue.streetAddress
          );
        });

        it('should execute onBlur with current value when streetAddress is blurred', done => {
          const onBlur = ev => {
            expect(ev.target.value).to.eql(initialValue);
            done();
          };
          const wrapper = mount(<NewAddressField value={initialValue} onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: addressFields.STREET_ADDRESS }).simulate('blur');
        });
      });

      describe('City', () => {
        it('should report correct value when city TextField changes', done => {
          const expected = { ...initialValue, city: 'Springfield' };
          const event = { target: { value: 'Springfield' } };
          const onChange = ev => {
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} value={initialValue} />);
          wrapper.find({ type: 'text', name: addressFields.CITY }).simulate('change', event);
        });

        it('should pass city value to text input when given', () => {
          const wrapper = mount(<NewAddressField value={initialValue} />);
          expect(wrapper.find({ type: 'text', name: addressFields.CITY }).prop('value')).to.equal(initialValue.city);
        });

        it('should execute onBlur with current value when city is blurred', done => {
          const onBlur = ev => {
            expect(ev.target.value).to.eql(initialValue);
            done();
          };
          const wrapper = mount(<NewAddressField value={initialValue} onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: addressFields.CITY }).simulate('blur');
        });
      });

      describe('State', () => {
        it('should report correct value when state TextField changes', done => {
          const expected = { ...initialValue, state: 'Oregon' };
          const event = { target: { value: 'Oregon' } };
          const onChange = ev => {
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} value={initialValue} />);
          wrapper.find({ type: 'text', name: addressFields.STATE }).simulate('change', event);
        });

        it('should pass state value to text input when given', () => {
          const wrapper = mount(<NewAddressField value={initialValue} />);
          expect(wrapper.find({ type: 'text', name: addressFields.STATE }).prop('value')).to.equal(initialValue.state);
        });

        it('should execute onBlur with current value when state is blurred', done => {
          const onBlur = ev => {
            expect(ev.target.value).to.eql(initialValue);
            done();
          };
          const wrapper = mount(<NewAddressField value={initialValue} onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: addressFields.STATE }).simulate('blur');
        });
      });

      describe('Postal Code', () => {
        it('should report correct value when postalCode TextField changes', done => {
          const expected = { ...initialValue, postalCode: '55555' };
          const event = { target: { value: '55555' } };
          const onChange = ev => {
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(<NewAddressField onChange={onChange} value={initialValue} />);
          wrapper.find({ type: 'text', name: addressFields.POSTAL_CODE }).simulate('change', event);
        });

        it('should pass postalCode value to text input when given', () => {
          const wrapper = mount(<NewAddressField value={initialValue} />);
          expect(wrapper.find({ type: 'text', name: addressFields.POSTAL_CODE }).prop('value')).to.equal(
            initialValue.postalCode
          );
        });

        it('should execute onBlur with current value when postalCode is blurred', done => {
          const onBlur = ev => {
            expect(ev.target.value).to.eql(initialValue);
            done();
          };
          const wrapper = mount(<NewAddressField value={initialValue} onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: addressFields.POSTAL_CODE }).simulate('blur');
        });
      });

      describe('Country', () => {
        it('should report correct value when country TextField changes', done => {
          const expected = { ...initialValue, country: 'us' };
          const onChange = ev => {
            expect(ev.target.value).to.eql(expected);
            done();
          };
          const wrapper = mount(
            <NewAddressField countryOptions={countries} onChange={onChange} value={initialValue} />
          );
          wrapper
            .find('.pbg-picker-menu')
            .find('.picker-menu-item')
            .at(1)
            .simulate('click');
        });

        it('should pass country value to picker when given', () => {
          const options = [{ label: 'MX', value: 'mx' }, { label: 'US', value: 'us' }];
          const value = { country: 'us' };
          const wrapper = mount(<NewAddressField countryOptions={options} value={value} />);
          expect(wrapper.find(Picker).prop('value')).to.equal(value.country);
        });
      });
    });

    describe('Touching', () => {
      describe('Street Address', () => {
        it('should call onBlur', () => {
          const onBlur = sinon.spy();
          const wrapper = mount(<NewAddressField onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: addressFields.STREET_ADDRESS }).simulate('blur');
          expect(onBlur.calledOnce).to.be.true;
        });

        it('should be touched when focused', () => {
          const wrapper = mount(<NewAddressField onChange={() => {}} />);
          expect(wrapper.state()[`${addressFields.STREET_ADDRESS}Touched`]).to.be.false;
          wrapper.find({ type: 'text', name: addressFields.STREET_ADDRESS }).simulate('blur');
          expect(wrapper.state()[`${addressFields.STREET_ADDRESS}Touched`]).to.be.true;
        });

        it('should only display error if it was touched', () => {
          const error = { [addressFields.STREET_ADDRESS]: 'Some error' };
          const wrapper = mount(<NewAddressField onChange={() => {}} error={error} />);
          expect(wrapper.instance().extractError(addressFields.STREET_ADDRESS)).to.be.null;
          wrapper.find({ type: 'text', name: addressFields.STREET_ADDRESS }).simulate('blur');
          expect(wrapper.instance().extractError(addressFields.STREET_ADDRESS)).to.equal(
            error[addressFields.STREET_ADDRESS]
          );
        });
      });

      describe('City', () => {
        it('should call onBlur', () => {
          const onBlur = sinon.spy();
          const wrapper = mount(<NewAddressField onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: addressFields.CITY }).simulate('blur');
          expect(onBlur.calledOnce).to.be.true;
        });

        it('should be touched when focused', () => {
          const touchState = `${addressFields.CITY}Touched`;
          const wrapper = mount(<NewAddressField onChange={() => {}} />);
          expect(wrapper.state()[touchState]).to.be.false;
          wrapper.find({ type: 'text', name: addressFields.CITY }).simulate('blur');
          expect(wrapper.state()[touchState]).to.be.true;
        });

        it('should only display error if it was touched', () => {
          const error = { [addressFields.CITY]: 'Some error' };
          const wrapper = mount(<NewAddressField onChange={() => {}} error={error} />);
          expect(wrapper.instance().extractError(addressFields.CITY)).to.be.null;
          wrapper.find({ type: 'text', name: addressFields.CITY }).simulate('blur');
          expect(wrapper.instance().extractError(addressFields.CITY)).to.equal(error[addressFields.CITY]);
        });
      });

      describe('State', () => {
        it('should call onBlur', () => {
          const onBlur = sinon.spy();
          const wrapper = mount(<NewAddressField onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: addressFields.STATE }).simulate('blur');
          expect(onBlur.calledOnce).to.be.true;
        });

        it('should be touched when focused', () => {
          const touchState = `${addressFields.STATE}Touched`;
          const wrapper = mount(<NewAddressField onChange={() => {}} />);
          expect(wrapper.state()[touchState]).to.be.false;
          wrapper.find({ type: 'text', name: addressFields.STATE }).simulate('blur');
          expect(wrapper.state()[touchState]).to.be.true;
        });

        it('should only display error if it was touched', () => {
          const error = { [addressFields.STATE]: 'Some error' };
          const wrapper = mount(<NewAddressField onChange={() => {}} error={error} />);
          expect(wrapper.instance().extractError(addressFields.STATE)).to.be.null;
          wrapper.find({ type: 'text', name: addressFields.STATE }).simulate('blur');
          expect(wrapper.instance().extractError(addressFields.STATE)).to.equal(error[addressFields.STATE]);
        });
      });

      describe('Postal Code', () => {
        it('should call onBlur', () => {
          const onBlur = sinon.spy();
          const wrapper = mount(<NewAddressField onBlur={onBlur} />);
          wrapper.find({ type: 'text', name: addressFields.POSTAL_CODE }).simulate('blur');
          expect(onBlur.calledOnce).to.be.true;
        });

        it('should be touched when focused', () => {
          const touchState = `${addressFields.POSTAL_CODE}Touched`;
          const wrapper = mount(<NewAddressField onChange={() => {}} />);
          expect(wrapper.state()[touchState]).to.be.false;
          wrapper.find({ type: 'text', name: addressFields.POSTAL_CODE }).simulate('blur');
          expect(wrapper.state()[touchState]).to.be.true;
        });

        it('should only display error if it was touched', () => {
          const error = { [addressFields.POSTAL_CODE]: 'Some error' };
          const wrapper = mount(<NewAddressField onChange={() => {}} error={error} />);
          expect(wrapper.instance().extractError(addressFields.POSTAL_CODE)).to.be.null;
          wrapper.find({ type: 'text', name: addressFields.POSTAL_CODE }).simulate('blur');
          expect(wrapper.instance().extractError(addressFields.POSTAL_CODE)).to.equal(error[addressFields.POSTAL_CODE]);
        });
      });

      describe('Country', () => {
        it('should be touched when focused', done => {
          const touchState = `${addressFields.COUNTRY}Touched`;

          const onBlur = wrapper => {
            expect(wrapper.state()[touchState]).to.be.true;
            done();
          };

          const wrapper = mount(
            <NewAddressField countryOptions={countries} onChange={() => {}} onBlur={() => onBlur(wrapper)} />
          );
          expect(wrapper.state()[touchState]).to.be.false;
          wrapper
            .find(Picker)
            .find('button')
            .simulate('blur');
        });

        it('should only display error if it was touched', done => {
          const error = { [addressFields.COUNTRY]: 'Some error' };

          const onBlur = wrapper => {
            expect(wrapper.instance().extractError(addressFields.COUNTRY)).to.equal(error[addressFields.COUNTRY]);
            done();
          };

          const wrapper = mount(
            <NewAddressField
              countryOptions={countries}
              onChange={() => {}}
              error={error}
              onBlur={() => onBlur(wrapper)}
            />
          );
          expect(wrapper.instance().extractError(addressFields.COUNTRY)).to.be.null;
          wrapper
            .find(Picker)
            .find('button')
            .simulate('blur');
        });
      });
    });
  });
});
