import React, { Component } from 'react';
import styled from 'styled-components';

import Gift from './Gift';

import { List, ListItem, BtnForAddGift, Wrapper } from './App.styled';

import { getMaxId } from '../helper/functions';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts: [],
    };
  }

  addGift = () => {
    const { gifts } = this.state;

    const ids = gifts.map(gift => gift.id);

    gifts.push({ id: getMaxId(ids) + 1 });

    this.setState({ gifts });
  };

  removeGift = id => {
    const filteredGift = this.state.gifts.filter(gift => gift.id !== id);

    this.setState({ gifts: filteredGift });
  };

  render() {
    return (
      <Wrapper>
        <h1>Gift Giver</h1>
        <List>
          {this.state.gifts.map(gift => {
            return (
              <Gift
                key={gift.id}
                gift={gift}
                removeGift={this.removeGift}
              >{`gift id: ${gift.id}`}</Gift>
            );
          })}
        </List>
        <BtnForAddGift onClick={this.addGift}>add gift</BtnForAddGift>
      </Wrapper>
    );
  }
}
