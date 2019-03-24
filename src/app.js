/**
 *
 * app.js
 * This is the application component. setup and boilerplate
 */

import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';

import store, { history } from './store';
import App from './containers/Application';

const app = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

export default hot(app);
