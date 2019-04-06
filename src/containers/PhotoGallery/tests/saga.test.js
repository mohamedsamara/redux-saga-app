import regeneratorRuntime from 'regenerator-runtime';

import { put, takeLatest, all, call } from 'redux-saga/effects';

import { photoGallerySaga, getPhotos } from '../saga';
import { getPhotosSuccess } from '../actions';
import { REQUEST_PHOTOS } from '../constants';

import api from '../../../utils/api';
import photosData from './photos';

describe('getPhotos Saga', () => {
  const getPhotosGenerator = getPhotos();

  it('the saga root should listen for the events', () => {
    const takeLatestDescriptor = photoGallerySaga().next().value;

    expect(takeLatestDescriptor).toEqual(
      all([takeLatest(REQUEST_PHOTOS, getPhotos)])
    );
  });

  it('should call function to fetch getPhotos api', () => {
    const putDescriptor = getPhotosGenerator.next().value;
    expect(putDescriptor).toEqual(call(api.gallery.getPhotos));
  });

  it('should dispatch the getPhotosSuccess action if it requests the data successfully', () => {
    const response = photosData;
    const putDescriptor = getPhotosGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(getPhotosSuccess(response)));
  });
});
