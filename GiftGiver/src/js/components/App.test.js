import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import { BtnForAddGift, List, ListItem } from './App.styled';

import App from './App';

configure({ adapter: new Adapter() });

const app = shallow(<App />);

const id = 1;
describe('App', () => {
  test('render correctly', () => {
    expect(app).toMatchSnapshot();
  });

  test('initialize state with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when add gift btn is clicked', () => {
    beforeEach(() => {
      app.find(BtnForAddGift).simulate('click');
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    test('add gift when add gift btn is clicked', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    test('List should have 1 child when add btn is clicked', () => {
      expect(app.find(List).children().length).toEqual(1);
    });

    test('Check Gift component exist', () => {
      expect(app.find('Gift').exists()).toBe(true);
    })

    describe('then user wants to remove gift', () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      })

      test('Expect gifts to be empty gifts', () => {
        expect(app.state().gifts).toEqual([]);
      })

      test('Expect gifts to be empty giftsd', () => {
        expect(app.state().gifts).toEqual([]);
      })
    })

  });


});
