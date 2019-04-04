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
  galleryError: {
    isError: false,
    message: ''
  }
});

const photoGalleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PHOTOS_SUCCESS:
      return state.set('photos', action.photos, action.id);
    case REQUEST_PHOTOS_FAILED:
      return state.mergeIn(['galleryError'], action.error);
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
