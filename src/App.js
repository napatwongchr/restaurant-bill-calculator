import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch,
Redirect } from 'react-router-dom'

import ShortcutMenu from './components/UI/ShortcutMenu'
import BillCalculation from './components/employee/BillCalculation'

import ScreenAdminDashboard from './screens/Admin/Dashboard'
import ScreenAdminDiscountCodesEdit from './screens/Admin/DiscountCodes/Edit'
import ScreenAdminDiscountCodesAdd from './screens/Admin/DiscountCodes/Add'
import ScreenAdminDiscountCodesList from './screens/Admin/DiscountCodes/List'

import ScreenCustomerSoon from './screens/Customer/Soon'

import ScreenAppMain from './screens/App/Main'
import EmployeeApp from './components/EmployeeApp'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      shortCutMenuToggle: false,
    }
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
                <Route path='/customer/soon' component={ScreenCustomerSoon} />
                <Redirect from='/customer' to='/customer/soon' />

                <Route path='/employee/calculation/:tableId' component={BillCalculation} />
                <Route path='/employee' component={EmployeeApp} />

                <Route path='/admin/discount-codes/edit/:codeId' component={ScreenAdminDiscountCodesEdit} />
                <Route path='/admin/discount-codes/add' component={ScreenAdminDiscountCodesAdd} />
                <Route path='/admin/discount-codes' component={ScreenAdminDiscountCodesList} />
                <Route path='/admin' component={ScreenAdminDashboard} />

                <Route path='/' component={ScreenAppMain} />
            </Switch>
            <ShortcutMenu
              shortCutMenuToggle={this.state.shortCutMenuToggle}
              onMouseEnter={() => this.setState({ shortCutMenuToggle: true })}
              onMouseLeave={() => this.setState({ shortCutMenuToggle: false })} />
          </div>
        </Router>
      </div>
    );
  }
}


export default App
