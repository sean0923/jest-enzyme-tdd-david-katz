import balanceReducer from './balanceReducer';
import * as actions from '../actions/index';
import * as types from '../actions/types';

describe('balance reducer test', () => {
  const balance = 100;
  const actionCallback = () => actions.setBalance(balance);

  test('reducer returning correct balance', () => {
    expect(balanceReducer(undefined, actionCallback())).toEqual(balance);
  });

  test('setBalance action will return proper obj', () => {
    const balance = 100;
    const properObj = {
      type: types.SET_BALANCE,
      balance,
    };

    expect(actions.setBalance(balance)).toEqual(properObj);
  });

  test('Able to add money', () => {
    const addtionalMoney = 100;
    const initMoney = 10;
    const action = actions.addMoney(addtionalMoney);

    expect(balanceReducer(initMoney, action)).toEqual(initMoney + addtionalMoney);
  });

  test('Able to substact money', () => {
    const addtionalMoney = 100;
    const initMoney = 10;
    const action = actions.subtractMoney(addtionalMoney);

    expect(balanceReducer(initMoney, action)).toEqual(initMoney - addtionalMoney);
  });
});
