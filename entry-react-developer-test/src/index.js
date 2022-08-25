import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
