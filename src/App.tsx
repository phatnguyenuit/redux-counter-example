import React from 'react';
import { Provider } from 'react-redux';
import GitHubCorner from 'react-github-corner';

import createStore from './redux/createStore';

import CounterPanel from './components/CounterDashboard';
import logo from './logo.svg';

import './App.css';

const store = createStore();

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-title">
          Simple <code>Counter</code> demo and unit tests
        </p>
        <GitHubCorner href="https://github.com/phatnguyenuit/redux-counter-example" />
      </header>
      <main className="App-content">
        <CounterPanel />
      </main>
    </div>
  );
};

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default WrappedApp;
