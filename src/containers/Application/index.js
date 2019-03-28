/*
 *
 * Application
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Switch, Route } from 'react-router-dom';

import PhotoGallery from '../PhotoGallery';
import Page404 from '../../components/Page404';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export class Application extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className='application'>
        <Header />
        <main className='main'>
          <Switch>
            <Route exact path='/' component={PhotoGallery} />
            <Route path='**' component={Page404} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapDispachToProps = dispatch => {
  return {};
};

const mapStateToProps = createSelector();

export default connect(
  null,
  null
)(Application);
