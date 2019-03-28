/*
 *
 * PhotoGallery reducer
 *
 */

import { DEFAULT_ACTION } from './constants';
import { fromJS } from 'immutable';

export const initialState = fromJS({});

const photoGalleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
};

export default photoGalleryReducer;
