import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteCode } from '../../actions/Codes'
import WrappedButton from '../common/WrappedButton'
import AdminLayout1 from '../common/AdminLayout1'
import AdminHeadings from '../common/AdminHeadings'
import { Table } from 'reactstrap'

class DiscountCode extends Component {
  renderTableRows() {
    const { codes, deleteCode, history } = this.props
    return codes.map(({ id, codeName }, index) => (
      <tr key={index}>
        <th scope='row'>{ id }</th>
        <td>{codeName}</td>
        <td>
          <WrappedButton
            className='ml-2'
            onClick={() => history.push(`/admin/discount/edit/${id}`)}
            iconName='edit'
            textcolor='#FFFFFF'
            color='#407fed'
            size='sm'
            text='EDIT' />
          <WrappedButton
            className='ml-2'
            onClick={() => deleteCode(id)}
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
          <h2>Discount Codes</h2>
          <WrappedButton
            onClick={() => history.push('/admin/discount/add')}
            iconName='add'
            textcolor='#000'
            color='#f9bc02'
            size='lg'
            text='ADD' />
        </AdminHeadings>
        <Table className='mt-3' bordered>
          <thead>
            <tr>
              <th>Id</th>
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

const mapStateToProps = ({ code }) => {
  const { codes } = code
  return { codes }
}

export default connect(mapStateToProps, { deleteCode })(DiscountCode)
