import { shallow } from 'enzyme';
import React from 'react';

import Wallet from './Wallet';

describe('Wallet Component', () => {
  const props = { balance: 20 };
  // const wallet = shallow(<Wallet {...props} />);
  const wallet = shallow(<Wallet />);

  test('render properly', () => {
    expect(wallet).toMatchSnapshot();
  });
});
