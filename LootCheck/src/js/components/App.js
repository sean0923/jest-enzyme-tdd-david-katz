import React, { Component } from 'react';
import moduleName from 'styled-components';

import { Test } from './App.styles';
import Wallet from './Wallet';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Loot Check</h1>
        <Wallet />
      </div>
    );
  }
}
