import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./routes";
import Header from "./components/Header";

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}
