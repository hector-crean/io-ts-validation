import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { store } from './store'
import { Provider } from 'react-redux';

import { client } from "./client";
import { ApolloProvider } from "@apollo/client";
const rootEl = document.getElementById("root") as HTMLElement;


// potential hurdle to do with redux and rf3: https://github.com/pmndrs/react-three-fiber/issues/43

ReactDOM.render(
  <ApolloProvider client={client}>
  <Provider store={store}>

    <React.StrictMode>
      <App />
    </React.StrictMode>

  </Provider>
  </ApolloProvider>,
rootEl
);

