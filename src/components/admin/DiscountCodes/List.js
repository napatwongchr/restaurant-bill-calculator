import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteCode } from '../../../actions/Codes'
import WrappedButton from '../../common/WrappedButton'
import ConfirmationModal from '../../common/ConfirmationModal'
import { Table } from 'reactstrap'

class DiscountCodesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      code: {}
    }
   this.toggle = this.toggle.bind(this)
   this.handleDelete = this.handleDelete.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleDelete() {
    const { deleteCode } = this.props
    const { code } = this.state
    deleteCode(code.id)
    this.toggle()
  }

  renderTableRows() {
    const { codes, history } = this.props
    return codes.map((code, index) => (
      <tr key={index}>
        <th scope='row'>{ code.id }</th>
        <td>{code.codeName}</td>
        <td>
          <WrappedButton
            className='ml-2'
            onClick={() => history.push(`/admin/discount-codes/edit/${code.id}`)}
            iconName='edit'
            textcolor='#FFFFFF'
            color='#407fed'
            size='sm'
            text='EDIT' />
          <WrappedButton
            className='ml-2'
            onClick={() => {
              this.setState({ code })
              this.toggle()
            }}
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
    const { code, modal } = this.state
    return (
      <div>
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
        <ConfirmationModal
          text={`Are you sure you want to delete ${code.codeName}?`}
          code={code}
          isOpen={modal}
          toggle={this.toggle}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ code }) => {
  const { codes } = code
  return { codes }
}

export default withRouter(
  connect(mapStateToProps, { deleteCode })(DiscountCodesList)
)
