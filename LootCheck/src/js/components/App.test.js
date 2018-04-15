import React from 'react';
import { shallow } from 'enzyme';

import { Test } from './App.styles';

import App from './App';

const app = shallow(<App />);

describe('App', () => {
  test('render correctly', () => {
    expect(app).toMatchSnapshot();
  });

  test('Check Wallet exists', () => {
    console.log('app.debug: ', app.debug());
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  })



});

// 'npm i --save-dev '
// 'enzyme'
// 'react-test-renderer'
// 'enzyme-adapter-react-16'
// 'enzyme-react-16-adapter-setup'
