import React from 'react';
import { mount } from 'enzyme';

import { BitcoinBalance } from './BitcoinBalance';

describe('Bitcoin balance', () => {
  const mockFetchBitcoin = jest.fn();
  const props = { bitcoin: { price: 'yeah' }, fetchBitcoinPrice: mockFetchBitcoin };
  const bitcoinBalance = mount(<BitcoinBalance {...props} />);

  it('dispatch fetchBitcoinPrice at component did monut', () => {
    expect(mockFetchBitcoin).toHaveBeenCalled();
  });
});
