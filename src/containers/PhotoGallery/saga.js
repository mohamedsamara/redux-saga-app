import { call, put, takeLatest, all } from 'redux-saga/effects';

import { REQUEST_PHOTOS } from './constants';

import { getPhotosSuccess, getPhotosFailed } from './actions';

import api from '../../api';

export function* getPhotos() {
  try {
    const response = yield call(api.gallery.getPhotos);
    yield put(getPhotosSuccess(response.data));
  } catch (e) {
    yield put(getPhotosFailed(e.message));
  }
}

export function* PhotoGallerySaga() {
  yield all([takeLatest(REQUEST_PHOTOS, getPhotos)]);
}
