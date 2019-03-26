/*
 *
 * Application
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { createSelector } from 'reselect';

import { onLoadApp } from './actions';
import { selectApplicationState } from './selectors';

export class Application extends React.Component {
  componentDidMount() {}

  render() {
    const { isAppLoaded, onLoadApp, redirect } = this.props;

    return (
      <div className='app' onClick={onLoadApp}>
        <h1>Saga Application Works!</h1>
        <p onClick={redirect}>
          {isAppLoaded
            ? 'Application is clicked'
            : 'Application is not clicked'}
        </p>
      </div>
    );
  }
}

const mapDispachToProps = dispatch => {
  return {
    onLoadApp: () => dispatch(onLoadApp()),
    redirect: () => dispatch(push('/home'))
  };
};

const mapStateToProps = createSelector(
  selectApplicationState(),
  isAppLoaded => ({
    isAppLoaded
  })
);

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Application);
