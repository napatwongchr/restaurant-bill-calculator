import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCode } from '../../actions/Codes'
import { Row, Col } from 'reactstrap'
import { AddDiscountCodeForm } from './DiscountCodeForm'
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
    const { addCode, history, codes } = this.props
    addCode(values, codes.length, () => history.push('/admin/discount'))
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
            <AddDiscountCodeForm onSubmit={this.submit.bind(this)} />
          </Col>
        </Row>
      </AdminLayout1>
    )
  }
}

const mapStateToProps = ({ code }) => {
  const { codes } = code
  return { codes }
}

export default connect(mapStateToProps, { addCode })(AddDiscountCode)
