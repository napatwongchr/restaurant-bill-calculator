import React, { Component } from 'react'
import styled from 'styled-components'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import ShortcutMenu from './components/common/ShortcutMenu'
import BillCalculation from './components/employee/BillCalculation'

import EditDiscountCode from './components/admin/EditDiscountCode'
import AddDiscountCode from './components/admin/AddDiscountCode'
import DiscountCode from './components/admin/DiscountCode'

import ReserveSeats from './components/customer/ReserveSeats'

import MainApp from './components/MainApp'
import EmployeeApp from './components/EmployeeApp'
import AdminApp from './components/AdminApp'

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
                <Route path='/admin/discount/edit/:codeId' component={EditDiscountCode} />
                <Route path='/admin/discount/add' component={AddDiscountCode} />
                <Route path='/admin/discount' component={DiscountCode} />
                <Route path='/admin' component={AdminApp} />
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
