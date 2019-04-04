/*
 *
 * PhotoGallery selector
 *
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPhotoGalleryDomain = state => state.get('gallery', initialState);

const selectPhotoGallery = () =>
  createSelector(
    selectPhotoGalleryDomain,
    photosState => photosState.get('photos')
  );

const selectGalleryError = () =>
  createSelector(
    selectPhotoGalleryDomain,
    galleryErrorState => galleryErrorState.get('galleryError').toJS()
  );

export { selectPhotoGalleryDomain, selectPhotoGallery, selectGalleryError };
