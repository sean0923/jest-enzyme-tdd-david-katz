import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as Styled from './Wallet.styles';
import { addMoney, subtractMoney, fetchBitcoinPrice } from '../actions/index';

export const Input = styled.input`
  &:focus {
    outline: none;
  }
`;

export const InputWithdrawal = styled.input`
  &:focus {
    outline: none;
  }
`;

const commonBtnStyle = styled.button`padding: .8rem 2rem;`;
export const BtnAddMoney = commonBtnStyle.extend`background-color: green;`;
export const BtnSubtractMoney = commonBtnStyle.extend`background-color: gray;`;

export class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      userInputWithdrawal: '',
    };
  }

  render() {
    // this.props.fetchBitcoinPrice();
    return (
      <div>
        <div className="wallet">{this.props.balance}</div>
        <br />
        <Input
          type="number"
          value={this.state.userInput}
          onChange={e => this.setState({ userInput: e.target.value })}
        />

        <BtnAddMoney
          onClick={() => {
            this.props.addMoney(parseInt(this.state.userInput));
          }}
        >
          Add Money
        </BtnAddMoney>

        <BtnSubtractMoney
          onClick={() => {
            this.props.subtractMoney(parseInt(this.state.userInput));
          }}
        >
          Subtract Money
        </BtnSubtractMoney>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    balance: state.balance,
  };
};

export default connect(mapStateToProps, { addMoney, subtractMoney, fetchBitcoinPrice })(Wallet);
