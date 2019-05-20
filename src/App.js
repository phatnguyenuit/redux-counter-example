import "./App.css";

import CounterPanel from "./components/CounterDashboard";
import { Provider } from "react-redux";
import React from "react";
import createStore from "./redux/createStore";
import logo from "./logo.svg";

const store = createStore();

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple <code>Counter</code> demo and unit tests
        </p>
        <a
          className="App-link"
          href="https://github.com/phatnguyenuit/redux-counter-example"
          target="_blank"
          rel="noopener noreferrer"
        >
          Checkout source code
        </a>
      </header>
      <CounterPanel />
    </div>
  );
};

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default WrappedApp;
