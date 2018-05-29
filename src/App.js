import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { fetchTable } from './actions/Table'
import { fetchCodes } from './actions/Codes'

import BillCalculation from './components/employee/BillCalculation'

import AddDiscountCode from './components/admin/AddDiscountCode'
import DiscountCode from './components/admin/DiscountCode'

import SuccessReserve from './components/customer/SuccessReserve'
import ReserveSeats from './components/customer/ReserveSeats'

import MainApp from './components/MainApp'
import EmployeeApp from './components/EmployeeApp'
import AdminApp from './components/AdminApp'

class App extends Component {
  // componentWillMount() {
  //   this.props.fetchTable()
  //   this.props.fetchCodes()
  // }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={MainApp} />

          <Route path='/customer/success' component={SuccessReserve} />
          <Route path='/customer' component={ReserveSeats} />

          <Route path='/employee/calculation/:tableId' component={BillCalculation} />
          <Route path='/employee' component={EmployeeApp} />

          <Route path='/admin/discount/add' component={AddDiscountCode} />
          <Route path='/admin/discount' component={DiscountCode} />
          <Route path='/admin' component={AdminApp} />
        </Switch>
      </Router>
    );
  }
}

export default connect(null, { fetchTable, fetchCodes })(App);
