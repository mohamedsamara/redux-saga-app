/*
 *
 * Application
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { onLoadApp } from './actions';

export class Application extends React.Component {
  componentDidMount() {}

  render() {
    const { isLoaded, onLoadApp } = this.props;

    return (
      <div className='app' onClick={onLoadApp}>
        <h1>Saga Application Works!</h1>
        <p>
          {isLoaded ? 'Application is clicked' : 'Application is not clicked'}
        </p>
      </div>
    );
  }
}

const mapDispachToProps = dispatch => {
  return {
    onLoadApp: () => dispatch(onLoadApp())
  };
};

const mapStateToProps = state => {
  return {
    isLoaded: state.app.isAppLoaded
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Application);
