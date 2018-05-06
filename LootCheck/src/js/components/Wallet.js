import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as Styled from './Wallet.styles';

export const Input = styled.input`
  &:focus {
    outline: none;
  }
`;

export class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
    };
  }

  render() {
    return (
      <div>
        <div className="wallet">{this.props.balance}</div>
        <br />
        <Input value={this.state.userInput} onChange={e => this.setState({ userInput: e.target.value })} />
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
