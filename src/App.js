import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,
Redirect } from 'react-router-dom';


import ReserveSeats from './components/customer/ReserveSeats'

import MainApp from './components/MainApp'
import EmployeeApp from './components/EmployeeApp'
import AdminApp from './components/AdminApp'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={MainApp} />

          <Redirect exact from='/customer' to='/customer/reserve' />
          <Route path='/customer/reserve' component={ReserveSeats} />

          <Route path='/employee' component={EmployeeApp} />
          <Route path='/admin' component={AdminApp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
