/**
 *
 * app.js
 * This is the application component. setup and boilerplate
 */

import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Switch, Route } from 'react-router-dom';

import configureStore, { history } from './configureStore';

import App from './containers/Application';
import Dashboard from './containers/Dashboard';
import Page404 from './components/Page404';

// Create redux store
const initialState = {};
const store = configureStore(initialState, history);

const app = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='**' component={Page404} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default hot(app);
