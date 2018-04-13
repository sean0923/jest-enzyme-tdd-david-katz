import React, { Component } from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Gift from './Gift';
import { Btn_remove, InputForPresent, InputForName } from './Gift.styles';

configure({ adapter: new Adapter() });

describe('Gift', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);

  test('renders properly', () => {
    expect(gift).toMatchSnapshot();
  });

  test('initialize state properly', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
  });

  describe('input related', () => {
    const name = 'Sean';
    const targetName = { target: { value: name } };

    test('handle onChange event at input for name', () => {
      gift.find(InputForName).simulate('change', targetName);
      expect(gift.state().person).toEqual(name);
    });

    const present = 'macbook pro';
    const targetPresent = { target: { value: present } };

    test('handle onChange event at input for present', () => {
      gift.find(InputForPresent).simulate('change', targetPresent);
      expect(gift.state().present).toEqual(present);
    });
  });

  describe('remove gift related', () => {
    beforeEach(() => {
      gift.find(Btn_remove).simulate('click');
    });

    test('invoke removeGift callback', () => {
      expect(mockRemove).toHaveBeenCalledWith(1);
    });
  });
});
