import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Router, Switch, Link} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Homepage from './pages/index';
import Poll from './pages/poll';
import App from './components/app.js';

// This file is the client entry point, specified in webpack.config

class AppClient extends React.Component{
  render(){
    return(
      <Router history={createHistory()}>
        <App>
          <Route exact path="/" component={Homepage}/>
          <Route path="/poll" component={Poll}/>
        </App>
      </Router>
    )
  }
}

ReactDOM.render(
  <AppClient />,
  document.getElementById('root')
);
