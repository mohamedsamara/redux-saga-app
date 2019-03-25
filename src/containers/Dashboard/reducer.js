/*
 *
 * Dashboard reducer
 *
 */

import { LOAD_DASHBOARD } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  isDashboardLoaded: 0
});

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DASHBOARD:
      state = {
        ...state,
        isDashboardLoaded: 1
      };

      return state;
    default:
      return state;
  }
};

export default dashboardReducer;
