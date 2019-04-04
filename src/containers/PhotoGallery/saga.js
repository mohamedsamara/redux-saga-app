/*
 *
 * PhotoGallery saga
 *
 */

import { call, put, takeLatest, all } from 'redux-saga/effects';

import { REQUEST_PHOTOS } from './constants';

import { getPhotosSuccess, getPhotosFailed } from './actions';

import api from '../../utils/api';

function* getPhotos() {
  try {
    const response = yield call(api.gallery.getPhotos);
    yield put(getPhotosSuccess(response.data));
  } catch (e) {
    let error = {
      message: e.message,
      isError: true
    };

    yield put(getPhotosFailed(error));
  }
}

export function* PhotoGallerySaga() {
  yield all([takeLatest(REQUEST_PHOTOS, getPhotos)]);
}
