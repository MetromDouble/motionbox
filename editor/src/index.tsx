import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import {
  BrowserRouter
} from 'react-router-dom';
import {
  Provider
} from 'react-redux';
import configureStore from './redux/configureStore';
import './assets/styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore(createBrowserHistory(), {});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={createMuiTheme({ palette: { type: 'light' }, typography: { useNextVariants: true } })}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
