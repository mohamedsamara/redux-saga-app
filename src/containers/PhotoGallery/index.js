/*
 *
 * PhotoGallery
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

export class PhotoGallery extends React.Component {
  componentDidMount() {}

  render() {
    const {} = this.props;

    return <div className='photo-gallery' />;
  }
}

const mapDispachToProps = dispatch => {
  return {};
};

const mapStateToProps = createSelector();

export default connect(
  null,
  null
)(PhotoGallery);
