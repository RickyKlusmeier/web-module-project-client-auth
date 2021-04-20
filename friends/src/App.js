import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NewFriend from './components/NewFriend';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/login'

import './App.css';

function App() {
  return (
    <Router>
    <div>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
          <Link to='./friendslist'>Meet your friends!</Link>
          <Link to='/newfriend'>Add a new friend</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path='./friendslist' component={FriendsList} />
        <Route path='/login' component={Login} />
        <Route path='/newfriend' component={NewFriend} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
