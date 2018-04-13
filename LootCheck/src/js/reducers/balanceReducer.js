import * as types from '../actions/types';

export default (state = 0, action) => {
  switch (action.type) {
    case types.SET_BALANCE:
      return action.balance;
    default:
      return state;
  }
};
