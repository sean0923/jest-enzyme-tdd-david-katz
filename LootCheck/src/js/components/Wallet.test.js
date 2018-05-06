import { shallow } from 'enzyme';
import React from 'react';

import { Wallet } from './Wallet'; // kind of weird has to be this way ...
// import Wallet from './Wallet';

import { Input } from './Wallet';

import * as Styled from './Wallet.styles';

describe('Wallet Component', () => {
  const props = { balance: 300 };
  const wallet = shallow(<Wallet {...props} />);

  test('render properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  test('show correct balance', () => {
    expect(wallet.find('.wallet').text()).toEqual('300');
  });

  test('check input exsit', () => {
    expect(wallet.find(Input).exists()).toBe(true);
  });

  test('local "userInput" should exist and value should be empty str', () => {
    expect(wallet.state()).toEqual({ userInput: '' });
  });

  describe('when user type into input', () => {
    const targetAmount = 5000;
    beforeEach(() => {
      wallet.find(Input).simulate('change', { target: { value: targetAmount } });
    });

    test('"userInput" should change val when user type', () => {
      expect(wallet.state().userInput).toEqual(targetAmount);
    });
  });
});
