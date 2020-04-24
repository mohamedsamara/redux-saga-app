/**
 *
 * PhotoGallery
 * @flow
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { Container, Loader } from 'semantic-ui-react';

import { getPhotos, animatePhoto } from './actions';
import {
  selectPhotoGalleryLoading,
  selectPhotoGallery,
  selectGalleryError
} from './selectors';
import Gallery from '../../components/Gallery';

type Props = {
  animatePhoto: Function,
  getPhotos: Function,
  photos: Array<Object>,
  loading: boolean
};

export class PhotoGallery extends React.Component<Props> {
  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    return (
      <div className='photo-gallery'>
        <Container>
          {this.props.loading ? <Loader active /> : <Gallery {...this.props} />}
        </Container>
      </div>
    );
  }
}

const mapDispachToProps = dispatch => {
  return {
    getPhotos: () => dispatch(getPhotos()),
    animatePhoto: (index, isAnimated) =>
      dispatch(animatePhoto(index, isAnimated))
  };
};

const mapStateToProps = createStructuredSelector({
  loading: selectPhotoGalleryLoading(),
  photos: selectPhotoGallery(),
  error: selectGalleryError()
});

export default connect(mapStateToProps, mapDispachToProps)(PhotoGallery);
