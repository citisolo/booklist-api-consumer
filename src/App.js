import React from 'react';
import Home from './Home';
import { Switch, Route, Router, Redirect, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';



function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Route path='/:page?/:itemsPerPage?' component={Home}/>
    </Router>
  );
}

export default withRouter(App);