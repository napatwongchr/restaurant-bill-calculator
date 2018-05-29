import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCode } from '../../actions/Codes'
import { Field, reduxForm } from 'redux-form'
import { Row, Col } from 'reactstrap'
import AddDiscountCodeForm from './AddDiscountCodeForm'
import AdminLayout1 from '../common/AdminLayout1'
import AdminHeadings from '../common/AdminHeadings'

class AddDiscountCode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      discountType: 'default'
    }
  }

  submit(values) {
    this.props.addCode(values)
  }

  handleSelect(event) {
    this.setState({ discountType: event.target.value})
  }

  render() {
    return (
      <AdminLayout1 headings='Add promotion code'>
        <AdminHeadings>
          <h2>Add Discount Code</h2>
        </AdminHeadings>
        <Row className='mt-3'>
          <Col>
            <AddDiscountCodeForm
              selectValue={this.state.discountType}
              handleSelect={this.handleSelect.bind(this)}
              onSubmit={this.submit.bind(this)} />
          </Col>
        </Row>
      </AdminLayout1>
    )
  }
}

export default connect(null, { addCode })(AddDiscountCode)
