/**
 *
 * PhotoGallery
 * @flow
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getPhotos, animatePhoto } from './actions';
import { selectPhotoGallery } from './selectors';

import Gallery from '../../components/Gallery';

type Props = {
  animatePhoto: Function,
  getPhotos: Function,
  photos: Array<Object>
};

export class PhotoGallery extends React.Component<Props> {
  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    return (
      <div className='photo-gallery'>
        <Gallery {...this.props} />
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

const mapStateToProps = selectPhotoGallery();

export default connect(
  mapStateToProps,
  mapDispachToProps
)(PhotoGallery);
