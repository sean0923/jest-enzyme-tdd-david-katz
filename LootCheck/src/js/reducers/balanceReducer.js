import * as types from '../actions/types';

export default (state = 0, action) => {
  switch (action.type) {
    case types.SET_BALANCE:
      return action.balance;
    case types.ADD_MONEY:
      return state + action.money;
    case types.SUBTRACT_MONEY:
      return state - action.money;
    default:
      return state;
  }
};
