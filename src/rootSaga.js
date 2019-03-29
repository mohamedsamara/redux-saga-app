/*
 *
 * rootSaga
 *
 */

import { all } from 'redux-saga/effects';

import { PhotoGallerySaga } from './containers/PhotoGallery/saga';

export default function* rootSaga() {
  yield all([PhotoGallerySaga()]);
}
