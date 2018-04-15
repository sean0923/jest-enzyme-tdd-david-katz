import balanceReducer from './balanceReducer';
import * as actions from '../actions/index';

describe('balance reducer test', () => {
  const balance = 100;
  const actionCallback = () => actions.setBalance(balance);

  test('reducer returning correct balance', () => {
    expect(balanceReducer(undefined, actionCallback())).toEqual(balance);
  });
});
