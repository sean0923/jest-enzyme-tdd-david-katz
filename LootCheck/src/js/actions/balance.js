import * as types from './types';

export const setBalance = balance => {
  return {
    type: types.SET_BALANCE,
    balance,
  };
};
