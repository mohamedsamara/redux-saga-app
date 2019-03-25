/*
 *
 * Application
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { onLoadApp } from './actions';
import { push } from 'connected-react-router';

export class Application extends React.Component {
  componentDidMount() {}

  render() {
    const { app, onLoadApp, redirect } = this.props;

    return (
      <div className='app' onClick={onLoadApp}>
        <h1 onClick={redirect}>Saga Application Works!</h1>
        <p>
          {app.isAppLoaded
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

const mapStateToProps = state => ({
  app: state.getIn(['app'])
});

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Application);
