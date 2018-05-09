import React from 'react';
import { mount, shallow } from 'enzyme';

import { BitcoinBalance } from './BitcoinBalance';

describe('Bitcoin balance', () => {
  const mockFetchBitcoin = jest.fn();
  it('dispatch fetchBitcoinPrice at component did monut', () => {
    const props = {
      bitcoin: {
        bpi: {
          USD: {
            rate: '9,153.1363',
          },
        },
      },
      fetchBitcoinPrice: mockFetchBitcoin,
    };
    // const bitcoinBalance = mount(<BitcoinBalance {...props} />);
    const bitcoinBalance = shallow(<BitcoinBalance {...props} />);
    expect(mockFetchBitcoin).toHaveBeenCalled();
  });

  describe('After bitcoin price is fetched', () => {
    let props;
    let bitcoinBalance;
    beforeEach(() => {
      props = {
        balance: 10,
        bitcoin: {
          bpi: {
            USD: {
              rate: '1,000',
            },
          },
        },
        fetchBitcoinPrice: mockFetchBitcoin,
      };

      bitcoinBalance = shallow(<BitcoinBalance {...props} />);
    });

    it('display balance in bitcoin', () => {
      expect(bitcoinBalance.find('h3').text()).toEqual('Bitcoin balance: 0.01');
    });
  });
});
