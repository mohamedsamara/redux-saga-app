/*
 *
 * rootSaga
 *
 */

import { all } from 'redux-saga/effects';

import { photoGallerySaga } from './containers/PhotoGallery/saga';

export default function* rootSaga() {
  yield all([photoGallerySaga()]);
}
