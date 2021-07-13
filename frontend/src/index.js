import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import configureStore from './store';
import * as articleActions from './store/articleReducer';
import './index.css';

const store = configureStore();

// A little something to make testing easier
if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.articleActions = articleActions;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
