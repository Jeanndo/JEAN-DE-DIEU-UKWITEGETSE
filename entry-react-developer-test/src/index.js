import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Redux/Reducers/index.js";
import { ApolloProvider } from "react-apollo";

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);
