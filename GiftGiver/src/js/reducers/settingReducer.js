import { UPDATE_BANK_NAME, UPDATE_THEME } from '../actions/types';

import { THEME, THEME_DARK, THEME_LIGHT } from '../constants/reducerPropNames/themeNames';
import {
  BANK_NAME,
  BANK_OF_AMERICA,
  WELLS_FARGO,
  EVOLVE_BANK,
} from '../constants/reducerPropNames/bankNames';

const initialState = {
  [THEME]: THEME_LIGHT,
  [BANK_NAME]: EVOLVE_BANK,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_BANK_NAME:
      return { ...state, [BANK_NAME]: action.payload };
    case UPDATE_THEME:
      return { ...state, [THEME]: action.payload };
    default:
      return state;
  }
}
