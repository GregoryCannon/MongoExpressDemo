import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Router, Switch, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Homepage from './components/index';
import Poll from './components/poll';
import App from './components/app';

// This file is the client entry point, specified in webpack.config

const AppClient = (props) => {
  console.log(Poll);
  console.log(App);
  return (
    <Router history={createHistory()}>
      <App>
        <Route exact path="/" component={Homepage}/>
        <Route path="/poll" component={Poll}/>
      </App>
    </Router>
  );
}

ReactDOM.render(
  <AppClient />,
  document.getElementById('root')
);
