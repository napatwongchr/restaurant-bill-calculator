import React, { Component } from 'react'
import styled from 'styled-components'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import ShortcutMenu from './components/common/ShortcutMenu'
import BillCalculation from './components/employee/BillCalculation'

import ScreenDashboard from './screens/Admin/Dashboard'
import ScreenDiscountCodesEdit from './screens/Admin/DiscountCodes/Edit'
import ScreenDiscountCodesAdd from './screens/Admin/DiscountCodes/Add'
import ScreenDiscountCodesList from './screens/Admin/DiscountCodes/List'

import ReserveSeats from './components/customer/ReserveSeats'

import MainApp from './components/MainApp'
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
      <MainAppWrapper>
        <Router>
          <div>
            <Switch>
                <Route path='/customer' component={ReserveSeats} />

                <Route path='/employee/calculation/:tableId' component={BillCalculation} />
                <Route path='/employee' component={EmployeeApp} />

                <Route path='/admin/discount-codes/edit/:codeId' component={ScreenDiscountCodesEdit} />
                <Route path='/admin/discount-codes/add' component={ScreenDiscountCodesAdd} />
                <Route path='/admin/discount-codes' component={ScreenDiscountCodesList} />
                <Route path='/admin' component={ScreenDashboard} />

                <Route path='/' component={MainApp} />
            </Switch>
            <ShortcutMenu
              shortCutMenuToggle={this.state.shortCutMenuToggle}
              onMouseEnter={() => this.setState({ shortCutMenuToggle: true })}
              onMouseLeave={() => this.setState({ shortCutMenuToggle: false })} />
          </div>
        </Router>
      </MainAppWrapper>
    );
  }
}

const MainAppWrapper = styled.div`
  position: relative;
`

export default App
