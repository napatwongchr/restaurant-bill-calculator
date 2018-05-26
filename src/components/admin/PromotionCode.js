import React, { Component } from 'react'
import { connect } from 'react-redux'
import AdminLayout1 from '../common/AdminLayout1'
import AdminHeadings from '../common/AdminHeadings'
import { Table, Button } from 'reactstrap'
import data from '../../data/PromotionCodes.json'

class PromotionCode extends Component {
  renderTableRows() {
    return data.codes.map(({ code }, index) => (
      <tr key={index}>
        <th scope='row'>{ index + 1}</th>
        <td>{code}</td>
        <td>
          <Button
            color='info'
            size='sm'
            onClick={() => console.log('go edit codes')}>
              Edit
          </Button>
          <Button
            className='ml-2'
            color='danger'
            size='sm'
            onClick={() => console.log('go delete codes')}>
              Delete
          </Button>
        </td>
      </tr>
    ))
  }

  render() {
    const { history } = this.props
    return (
      <AdminLayout1 headings='Promotion Code'>
        <AdminHeadings>
          <h2>Promotion Codes</h2>
          <Button
            color='primary'
            onClick={() => history.push('/admin/promotion/add')}>
              Add
          </Button>
        </AdminHeadings>
        <Table className='mt-3' bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Codes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.renderTableRows() }
          </tbody>
        </Table>
      </AdminLayout1>
    )
  }
}


export default connect()(PromotionCode)
