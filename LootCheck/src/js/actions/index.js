// https://api.coindesk.com/v1/bpi/currentprice.json
import * as types from './types';
import axios from 'axios';
// import { type } from 'os';

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

// export const fetchBitcoinPrice = () => {
//   return dispatch => {
//     console.log('aa');
//     return axios
//       .get(types.FETCH_URL)
//       .then(resp => resp.data)
//       .then(data => {
//         console.log('bb');
//         return dispatch({
//           type: types.FETCH_BITCOIN_PRICE,
//           payload: data,
//         });
//       })
//       .catch(err => {
//         console.log('err: ', err);
//       });
//   };
// };

export const fetchBitcoinPrice = () => {
  return dispatch => {
    return fetch(types.FETCH_URL).then(resp => resp.json()).then(json =>
      dispatch({
        type: types.FETCH_BITCOIN_PRICE,
        bitcoin: json,
      })
    );
  };
};
