import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BillCalculation from './components/employee/BillCalculation'

import AddPromotionCode from './components/admin/AddPromotionCode'
import PromotionCode from './components/admin/PromotionCode'

import SuccessReserve from './components/customer/SuccessReserve'
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

          <Route path='/customer/success' component={SuccessReserve} />
          <Route path='/customer' component={ReserveSeats} />

          <Route path='/employee/calculation/:tableId' component={BillCalculation} />
          <Route path='/employee' component={EmployeeApp} />

          <Route path='/admin/promotion/add' component={AddPromotionCode} />
          <Route path='/admin/promotion' component={PromotionCode} />
          <Route path='/admin' component={AdminApp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
