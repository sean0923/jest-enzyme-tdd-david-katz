import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

const app = shallow(<App />);

describe('App', () => {
  test('render correctly', () => {
    expect(app).toMatchSnapshot();
  })
})

'npm i --save-dev '
'enzyme'
'react-test-renderer'
'enzyme-adapter-react-16'
'enzyme-react-16-adapter-setup'