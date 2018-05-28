import React, { Component } from 'react'
import { connect } from 'react-redux'
import WrappedButton from '../common/WrappedButton'
import AdminLayout1 from '../common/AdminLayout1'
import AdminHeadings from '../common/AdminHeadings'
import { Table, Button } from 'reactstrap'
import data from '../../data/PromotionCodes.json'

class PromotionCode extends Component {
  renderTableRows() {
    return data.data.map(({ name }, index) => (
      <tr key={index}>
        <th scope='row'>{ index + 1}</th>
        <td>{name}</td>
        <td>
          <WrappedButton
            className='ml-2'
            onClick={() => console.log('edit')}
            iconName='edit'
            textcolor='#FFFFFF'
            color='#407fed'
            size='sm'
            text='EDIT' />
          <WrappedButton
            className='ml-2'
            onClick={() => console.log('delete')}
            iconName='clear'
            textcolor='#FFFFFF'
            color='#ef405a'
            size='sm'
            text='DELETE' />
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
          <WrappedButton
            onClick={() => history.push('/admin/promotion/add')}
            iconName='add'
            textcolor='#000'
            color='#f9bc02'
            size='lg'
            text='ADD' />
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
