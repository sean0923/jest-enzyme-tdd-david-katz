import * as types from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_BITCOIN_PRICE:
      return action.bitcoin;
    default:
      return state;
  }
};
