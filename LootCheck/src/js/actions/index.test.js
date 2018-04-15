import * as types from './types';
import * as actions from './index';

describe('balance test', () => {
  test('Set balance to target balance', () => {
    const balance = 100;
    const outputObjFromAction = {
      type: types.SET_BALANCE,
      balance,
    };

    expect(actions.setBalance(balance)).toEqual(outputObjFromAction);
  });

  test('Add money to balance', () => {
    const money = 100;
    const outputObjFromAction = {
      type: types.ADD_MONEY,
      money,
    };

    expect(actions.addMoney(money)).toEqual(outputObjFromAction);
  });

  test('Substract money from balance', () => {
    const money = 50;
    const outputObjFromAction = {
      type: types.SUBTRACT_MONEY,
      money,
    };

    expect(actions.subtractMoney(money)).toEqual(outputObjFromAction);
  });
});
