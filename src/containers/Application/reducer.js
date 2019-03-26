/*
 *
 * Application reducer
 *
 */

import { LOAD_APP } from './constants';
import { fromJS } from 'immutable';

export const initialState = fromJS({
  isAppLoaded: 0
});

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_APP:
      return state.set('isAppLoaded', 1);
    default:
      return state;
  }
};

export default applicationReducer;
