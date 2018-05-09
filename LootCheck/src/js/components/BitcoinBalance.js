import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoinPrice } from '../actions/index';

export class BitcoinBalance extends Component {
  componentDidMount() {
    this.props.fetchBitcoinPrice();
  }

  computeBalanceInBitcoin() {
    const { bitcoin, balance } = this.props;
    if (Object.keys(bitcoin).length === 0) return null;
    return balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
  }

  render() {
    return (
      <div>
        <h3>Bitcoin balance: {this.computeBalanceInBitcoin()}</h3>
      </div>
    );
  }
}

const mapStateToProos = state => {
  return {
    balance: state.balance,
    bitcoin: state.bitcoin,
  };
};

export default connect(mapStateToProos, { fetchBitcoinPrice })(BitcoinBalance);
