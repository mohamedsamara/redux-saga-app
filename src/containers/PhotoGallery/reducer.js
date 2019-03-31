/*
 *
 * PhotoGallery reducer
 *
 */

import { fromJS } from 'immutable';

import {
  REQUEST_PHOTOS_SUCCESS,
  REQUEST_PHOTOS_FAILED,
  ANIMATE_PHOTO
} from './constants';

export const initialState = fromJS({
  photos: [],
  error: ''
});

const photoGalleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PHOTOS_SUCCESS:
      return state.set('photos', action.photos, action.id);
    case REQUEST_PHOTOS_FAILED:
      return state.set('error', action.error);
    case ANIMATE_PHOTO:
      return state.setIn(
        ['photos', action.index, 'isAnimated'],
        action.isAnimated
      );
    default:
      return state;
  }
};

export default photoGalleryReducer;
