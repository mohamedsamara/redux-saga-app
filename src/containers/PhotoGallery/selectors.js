/*
 *
 * PhotoGallery selector
 *
 */

import { createSelector } from 'reselect';

const selectPhotoGalleryDomain = () => state => state.get('gallery');

const selectPhotoGallery = () =>
  createSelector(
    selectPhotoGalleryDomain(),
    substate => substate.toJS()
  );

export { selectPhotoGalleryDomain, selectPhotoGallery };
