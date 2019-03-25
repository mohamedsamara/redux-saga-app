/*
 *
 * reducers.js
 * reducers configuration
 */

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

// import reducers
import applicationReducer from './containers/Application/reducer';

import dashboardReducer from './containers/Dashboard/reducer';

const createReducer = history =>
  combineReducers({
    router: connectRouter(history),
    app: applicationReducer,
    dashboard: dashboardReducer
  });

export default createReducer;
