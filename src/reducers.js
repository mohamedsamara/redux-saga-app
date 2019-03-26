/*
 *
 * reducers.js
 * reducers configuration
 */

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

// import reducers
import applicationReducer from './containers/Application/reducer';

const createReducer = history =>
  combineReducers({
    router: connectRouter(history),
    app: applicationReducer
  });

export default createReducer;
