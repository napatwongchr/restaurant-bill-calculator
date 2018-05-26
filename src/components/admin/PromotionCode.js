import React, { Component } from 'react'
import AdminLayout1 from '../common/AdminLayout1'
import { Table } from 'reactstrap'
import data from '../../data/PromotionCodes.json'

class PromotionCode extends Component {
  renderTableRows() {
    return data.codes.map(({ code }, index) => (
      <tr key={index}>
        <th scope='row'>{ index + 1}</th>
        <td>{code}</td>
        <td>Edit | Delete</td>
      </tr>
    ))
  }

  render() {
    return (
      <AdminLayout1 headings='Promotion Code'>
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


export default PromotionCode
