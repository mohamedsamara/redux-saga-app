/**
 *
 * app.js
 * This is the application component. setup and boilerplate
 */

import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';

import store from './store';
import App from './containers/Application';

const app = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default hot(module)(app);
