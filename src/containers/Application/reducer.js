/*
 *
 * Application reducer
 *
 */

import { LOAD_APP } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  isAppLoaded: 0
});

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_APP:
      state = {
        ...state,
        isAppLoaded: 1
      };

      return state;
    default:
      return state;
  }
};

export default applicationReducer;
