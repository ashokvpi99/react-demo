import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Register from './components/Signup';
import Login from './components/Login';
import NavBar from './components/Nav';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar/>
          <Switch>
            <Route component={Home} path={'/'}></Route>
            <Route component={Register} path={'/register'}></Route>
            <Route component={Login} path={'/login'}></Route>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }

}

export default App;
