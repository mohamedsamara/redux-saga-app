/*
 *
 * PhotoGallery reducer
 *
 */

import { REQUEST_PHOTOS_SUCCESS, REQUEST_PHOTOS_FAILED } from './constants';
import { fromJS } from 'immutable';

export const initialState = fromJS({
  photos: [],
  error: ''
});

const photoGalleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PHOTOS_SUCCESS:
      return state.set('photos', action.photos);
    case REQUEST_PHOTOS_FAILED:
      return state.set('error', action.error);
    default:
      return state;
  }
};

export default photoGalleryReducer;
