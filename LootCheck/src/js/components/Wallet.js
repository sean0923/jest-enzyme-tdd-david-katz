import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Styled from './Wallet.styles';

export class Wallet extends Component {
  render() {
    return (
      <div>
        <div className="wallet">{this.props.balance}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    balance: state.balance,
  };
};

export default connect(mapStateToProps)(Wallet);
