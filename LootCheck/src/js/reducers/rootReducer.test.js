import rootReducer from './rootReducer';

describe('root reducer', () => {
  it('initialize defualt states', () => {
    expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
  });
});
