import React from "react";
import {render} from 'react-dom';
import { Provider } from "react-redux";
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import rootReducer from './Reducers'
import App from "./App";
import Routes from "./routes";
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

render(<Provider store = {store}>
  {/* <App /> */}
  <Routes />
  </Provider>, document.getElementById("root"));


