import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './globals/global-styles.scss';
import './globals/materialize-elements-setting';
import 'materialize-css/dist/js/materialize.min';
import 'materialize-css/dist/css/materialize.min.css';

import App from './App';

const initialState = {
  films: [],
};

const initialState2 = {
  pageNumber: 2,
};

const statePage1 = (state = initialState, action) => {
  switch (action.type) {
    case 'FILMS_GET':
      return { films: action.payload };
    case 'APP2':
      return { app: Math.random() + '123123213' };
    default:
      return state;
  }
};

const statePage2 = (state = initialState2, action) => {
  switch (action.type) {
    case 'APP':
      return { app: Math.random() };
    case 'APP2':
      return { app: Math.random() + '123123213' };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  statePage1,
  statePage2
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
