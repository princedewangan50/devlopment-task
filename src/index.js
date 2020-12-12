import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

//redux-react 
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import render  from "../src/reducer/reducer";

//component
import IndexPage from "./page/index";
//create store for sharing state
const store = createStore(render)

ReactDOM.render(
  <Provider store={store}>
    <IndexPage />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
