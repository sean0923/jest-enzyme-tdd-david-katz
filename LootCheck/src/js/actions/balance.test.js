import * as types from './types';
import * as actions from './balance';

describe('balance test', () => {
  test('Set balance to target balance', () => {
    const balance = 100;
    const expectedActionToReture = {
      type: types.SET_BALANCE,
      balance,
    };

    expect(actions.setBalance(balance)).toEqual(expectedActionToReture);
    // expect(1).toEqual(1);
  });
});
