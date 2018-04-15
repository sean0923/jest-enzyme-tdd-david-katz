import * as types from './types';

export const setBalance = balance => {
  return {
    type: types.SET_BALANCE,
    balance,
  };
};

export const addMoney = money => {
  return {
    type: types.ADD_MONEY,
    money,
  };
};

export const subtractMoney = money => {
  return {
    type: types.SUBTRACT_MONEY,
    money,
  };
};
