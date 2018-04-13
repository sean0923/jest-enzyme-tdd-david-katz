import balanceReducer from './balanceReducer';
import * as actions from '../actions/balance';

describe('balance reducer test', () => {
  const balance = 100;
  const actionCallback = () => actions.setBalance(balance);

  test('reducer returning correct balance', () => {
    expect(balanceReducer(undefined, actionCallback())).toEqual(balance);
  });
});
