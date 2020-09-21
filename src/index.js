import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/style.css';
import FullPage from './featues/homepage/fullPage';
import rootReducer from './core/rootReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter} from 'react-router-dom';

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render (
  <BrowserRouter>
    <Provider store={store}>
      <FullPage />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);