import bitcoinReducer from './bitcoinReducer';
import * as types from '../actions/types';

describe('test related to bitcoin reducer', () => {
  const outputBitcoinVal = 'some val';
  const reducerInput = { type: types.FETCH_BITCOIN_PRICE, bitcoin: outputBitcoinVal };

  it('fetch bitcoin action -> bitcoin reducer return proper payload', () => {
    expect(bitcoinReducer({}, reducerInput)).toEqual(outputBitcoinVal);
  });
});
