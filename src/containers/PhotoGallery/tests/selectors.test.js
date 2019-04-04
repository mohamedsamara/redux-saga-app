import { fromJS } from 'immutable';

import photosData from './photos';

import {
  selectPhotoGalleryDomain,
  selectPhotoGallery,
  selectGalleryError
} from '../selectors';

describe('selectPhotoGalleryDomain', () => {
  it('should select the gallery state', () => {
    const galleryState = fromJS({
      photos: []
    });
    const mockedState = fromJS({
      gallery: galleryState
    });
    expect(selectPhotoGalleryDomain(mockedState)).toEqual(galleryState);
  });
});

describe('selectPhotoGallery', () => {
  const gallerySelector = selectPhotoGallery();
  it('should select the photos', () => {
    const photos = photosData;

    const mockedState = fromJS({
      gallery: {
        photos
      }
    });

    expect(gallerySelector(mockedState)).toEqual(fromJS(photos));
  });
});

describe('selectGalleryError', () => {
  const errorSelector = selectGalleryError();
  it('should select error', () => {
    const galleryError = {
      isError: true,
      message: 'Network Error'
    };

    const mockedState = fromJS({
      gallery: {
        galleryError
      }
    });

    expect(errorSelector(mockedState)).toEqual(galleryError);
  });
});
