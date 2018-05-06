import balanceReducer from './balanceReducer';
import * as actions from '../actions/index';

describe('balance reducer test', () => {
  const balance = 100;
  const actionCallback = () => actions.setBalance(balance);

  test('reducer returning correct balance', () => {
    expect(balanceReducer(undefined, actionCallback())).toEqual(balance);
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
