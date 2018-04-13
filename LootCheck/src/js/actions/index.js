import { UPDATE_BANK_NAME, UPDATE_THEME } from './types';

export const updateBankName = bankName => ({
  type: UPDATE_BANK_NAME,
  payload: bankName,
});

export const updateTheme = theme => {
  return {
    type: UPDATE_THEME,
    payload: theme,
  };
};
