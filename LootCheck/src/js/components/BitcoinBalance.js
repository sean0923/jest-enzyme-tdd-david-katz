import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoinPrice } from '../actions/index';

export class BitcoinBalance extends Component {
  componentDidMount() {
    this.props.fetchBitcoinPrice();
  }

  render() {
    return (
      <div>
        <h3>Bitcoin balance</h3>
      </div>
    );
  }
}

const mapStateToProos = state => {
  return {
    bitcoin: state.bitcoin,
  };
};

export default connect(mapStateToProos, { fetchBitcoinPrice })(BitcoinBalance);
