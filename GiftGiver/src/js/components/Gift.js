import React, { Component } from 'react';
import {
  Btn_remove,
  Label,
  InputForPresent,
  InputForName,
  Wrapper,
  WrapperBtn,
} from './Gift.styles';

export default class Gift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: '',
      present: '',
    };
  }

  render() {
    return (
      <Wrapper>
        <Label>name</Label>
        <InputForName
          value={this.state.person}
          onChange={e => this.setState({ person: e.target.value })}
        />

        <Label>present</Label>
        <InputForPresent
          value={this.state.present}
          onChange={e => this.setState({ present: e.target.value })}
        />

        <WrapperBtn>
          <Btn_remove onClick={() => this.props.removeGift(this.props.gift.id)}>
            remove gift
          </Btn_remove>
        </WrapperBtn>
      </Wrapper>
    );
  }
}
