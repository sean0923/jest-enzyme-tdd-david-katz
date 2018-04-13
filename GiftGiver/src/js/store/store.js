import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';

import thunk from 'redux-thunk';
import promise from 'redux-promise';

const middleware = [thunk, promise];

const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const composeWithArgs =
  process.env.NODE_ENV === 'development'
    ? compose(applyMiddleware(...middleware), reduxDevTool)
    : compose(applyMiddleware(...middleware));

const store = createStore(rootReducer, composeWithArgs);

export default store;
