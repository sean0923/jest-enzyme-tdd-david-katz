import { combineReducers } from 'redux';
import settingReducer from './settingReducer';

import { RDX_SETTING } from '../constants/reducerNames';

export default combineReducers({
  [RDX_SETTING]: settingReducer,
});
