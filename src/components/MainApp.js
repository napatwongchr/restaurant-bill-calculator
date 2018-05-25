import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectRole } from '../actions/Auth'

class MainApp extends Component {
  render() {
    const { history } = this.props
    return (
      <div className='container'>
        <h1 className='text-center'>Select Your Role</h1>
        <div className='row'>
          <div className='col-4'>
            <div onClick={() => history.push('/customer')} className='card'>
              <div className='card-body'>
                CUSTOMER
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div onClick={() => history.push('/employee')} className='card'>
              <div className='card-body'>
                EMPLOYEE
              </div>
            </div>
          </div>
          <div className='col-4'>
            <div onClick={() => history.push('/admin')} className='card'>
              <div className='card-body'>
                ADMIN
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { selectRole })(MainApp)
