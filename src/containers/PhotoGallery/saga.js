/*
 *
 * PhotoGallery saga
 *
 */

import { call, put, delay, takeLatest, all } from 'redux-saga/effects';

import { REQUEST_PHOTOS } from './constants';

import { setLoading, getPhotosSuccess, getPhotosFailed } from './actions';

import api from '../../utils/api';

export function* getPhotos() {
  try {
    yield put(setLoading(true));
    yield delay(2000);

    const response = yield call(api.gallery.getPhotos);
    yield put(getPhotosSuccess(response));
    yield put(setLoading(false));
  } catch (e) {
    let error = {
      message: e.message,
      isError: true
    };

    yield put(getPhotosFailed(error));
  }
}

export function* photoGallerySaga() {
  yield all([takeLatest(REQUEST_PHOTOS, getPhotos)]);
}
