import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import BillCalculation from './components/employee/BillCalculation'

import EditDiscountCode from './components/admin/EditDiscountCode'
import AddDiscountCode from './components/admin/AddDiscountCode'
import DiscountCode from './components/admin/DiscountCode'

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

          <Route path='/admin/discount/edit/:codeId' component={EditDiscountCode} />
          <Route path='/admin/discount/add' component={AddDiscountCode} />
          <Route path='/admin/discount' component={DiscountCode} />
          <Route path='/admin' component={AdminApp} />
        </Switch>
      </Router>
    );
  }
}

export default App
