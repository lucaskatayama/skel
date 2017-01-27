import 'babel-polyfill';

import React from 'react';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';
import { Provider as ReduxProvider } from 'react-redux';
import App from 'app/views/main';
import configureStore from './app/redux/store';


const reduxStore = configureStore(window.REDUX_INITIAL_DATA);
const rootHtml = (
  <ReduxProvider store={reduxStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);

render(rootHtml, document.getElementById('app'));
