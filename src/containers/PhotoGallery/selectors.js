import { createSelector } from 'reselect';

const selectPhotoGalleryDomain = state => state.get('gallery');

const selectPhotoGallery = () => createSelector(selectPhotoGalleryDomain);

export { selectPhotoGalleryDomain, selectPhotoGallery };
