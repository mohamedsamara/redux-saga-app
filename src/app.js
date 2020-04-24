/**
 *
 * app.js
 *
 */

import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';

import configureStore, { history } from './configureStore';

import Application from './containers/Application';

// semantic ui css styles
import 'semantic-ui-css/semantic.min.css';

// Import application sass styles
import './styles/sass/style.scss';

// Create redux store
const initialState = {};
const store = configureStore(initialState, history);

const app = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Application />
    </ConnectedRouter>
  </Provider>
);

export default hot(app);
