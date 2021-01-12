import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { client } from "./client";
import { ApolloProvider } from "@apollo/client";
const rootEl = document.getElementById("root") as HTMLElement;


ReactDOM.render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>,
rootEl
);

