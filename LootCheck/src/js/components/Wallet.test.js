import { shallow } from 'enzyme';
import React from 'react';

import { Wallet } from './Wallet'; // kind of weird has to be this way ...
// import Wallet from './Wallet';

import { Input, BtnAddMoney } from './Wallet';

describe('Wallet Component', () => {
  const mockDeposit = jest.fn();
  const balance = 300;
  const props = { balance, addMoney: mockDeposit };
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
    expect(wallet.state().userInput).toEqual('');
  });

  describe('when user type into input', () => {
    beforeEach(() => {
      wallet.find(Input).simulate('change', { target: { value: balance } });
    });

    test('"userInput" should change val when user type', () => {
      expect(wallet.state().userInput).toEqual(balance);
    });
  });

  describe('when add money btn is clicked', () => {
    beforeEach(() => {
      wallet.find(BtnAddMoney).simulate('click');
    });

    test('add money actions should be called with balacne', () => {
      expect(mockDeposit).toHaveBeenCalledWith(balance);
    });
  });
});
