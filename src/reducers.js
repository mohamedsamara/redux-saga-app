/*
 *
 * reducers.js
 * reducers configuration
 */

import { combineReducers } from 'redux';

// import reducers

import applicationReducer from './containers/Application/reducer';

const createReducer = () =>
  combineReducers({
    app: applicationReducer
  });

export default createReducer;
