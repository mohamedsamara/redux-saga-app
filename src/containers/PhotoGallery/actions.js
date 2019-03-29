/*
 *
 * PhotoGallery actions
 *
 */

import {
  REQUEST_PHOTOS,
  REQUEST_PHOTOS_SUCCESS,
  REQUEST_PHOTOS_FAILED
} from './constants';

export function getPhotos() {
  return {
    type: REQUEST_PHOTOS
  };
}

export function getPhotosSuccess(photos) {
  return {
    type: REQUEST_PHOTOS_SUCCESS,
    photos
  };
}

export function getPhotosFailed(error) {
  return {
    type: REQUEST_PHOTOS_FAILED,
    error
  };
}
