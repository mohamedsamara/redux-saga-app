/*
 *
 * PhotoGallery
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getPhotos } from './actions';
import { selectPhotoGallery } from './selectors';

import Gallery from '../../components/Gallery';

export class PhotoGallery extends React.Component {
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
    getPhotos: () => dispatch(getPhotos())
  };
};

const mapStateToProps = selectPhotoGallery();

export default connect(
  mapStateToProps,
  mapDispachToProps
)(PhotoGallery);
