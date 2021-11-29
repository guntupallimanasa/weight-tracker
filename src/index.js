import React from "react";
import {render} from 'react-dom';
import { Provider } from "react-redux";
import {createStore} from 'redux'
import rootReducer from './Reducers'
import App from "./App";
import Routes from "./routes";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri:"http://localhost:7002/graphql"
  })
})

const store = createStore(rootReducer);

render(<ApolloProvider client = {client}>
  <Provider store = {store}>
  {/* <App /> */}
  <Routes />
  </Provider>
  </ApolloProvider>, document.getElementById("root"));


