import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'jest-mock-axios';
import fetchMock from 'fetch-mock';

import * as actions from './index';
import * as types from './types';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);
const store = mockStore({});

const mockResponse = { body: { bpi: 'something' } };

fetchMock.get(types.FETCH_URL, mockResponse);

it('creates an async action to fetch the bitcoin value', () => {
  const expectedActions = [{ bitcoin: mockResponse.body, type: types.FETCH_BITCOIN_PRICE }];

  return store.dispatch(actions.fetchBitcoinPrice())
    .then(() => {
      // console.log('store.getActions(): ', store.getActions());
      expect(store.getActions()).toEqual(expectedActions);
    })
});
