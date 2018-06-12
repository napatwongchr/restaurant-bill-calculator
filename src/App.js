import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch,
Redirect } from 'react-router-dom'

import ShortcutMenu from './components/UI/ShortcutMenu'

import ScreensAdminDashboard from './screens/Admin/Dashboard'
import ScreensAdminDiscountCodesEdit from './screens/Admin/DiscountCodes/Edit'
import ScreensAdminDiscountCodesAdd from './screens/Admin/DiscountCodes/Add'
import ScreensAdminDiscountCodesList from './screens/Admin/DiscountCodes/List'

import ScreensCustomerSoon from './screens/Customer/Soon'

import ScreensEmployeeCalculator from './screens/Employee/Calculator'
import ScreensEmployeeTables from './screens/Employee/Tables'

import ScreensMainApp from './screens/App/Main'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      shortCutMenuToggle: false,
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
              <Route path='/customer/soon' component={ScreensCustomerSoon} />
              <Redirect from='/customer' to='/customer/soon' />

              <Route path='/employee/calculator/:tableId' component={ScreensEmployeeCalculator} />
              <Route path='/employee/tables' component={ScreensEmployeeTables} />
              <Redirect from='/employee' to='/employee/tables' />

              <Route path='/admin/discount-codes/edit/:codeId' component={ScreensAdminDiscountCodesEdit} />
              <Route path='/admin/discount-codes/add' component={ScreensAdminDiscountCodesAdd} />
              <Route path='/admin/discount-codes' component={ScreensAdminDiscountCodesList} />
              <Route path='/admin/dashboard' component={ScreensAdminDashboard} />
              <Redirect from='/admin' to='/admin/dashboard' />

              <Route path='/' component={ScreensMainApp} />
          </Switch>
          <ShortcutMenu
            shortCutMenuToggle={this.state.shortCutMenuToggle}
            onMouseEnter={() => this.setState({ shortCutMenuToggle: true })}
            onMouseLeave={() => this.setState({ shortCutMenuToggle: false })} />
        </div>
      </Router>
    )
  }
}


export default App
