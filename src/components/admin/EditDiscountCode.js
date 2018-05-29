import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCode, fetchCodeById, editCode } from '../../actions/Codes'
import { Field, reduxForm } from 'redux-form'
import { Row, Col } from 'reactstrap'
import { EditDiscountCodeForm } from './DiscountCodeForm'
import AdminLayout1 from '../common/AdminLayout1'
import AdminHeadings from '../common/AdminHeadings'

class EditDiscountCode extends Component {
  componentWillMount() {
    const { fetchCodeById, match: { params } } = this.props
    fetchCodeById(+params.codeId)
  }

  submit(values) {
    const { history, editCode, match: { params } } = this.props
    const data = { id: +params.codeId, values }
    editCode(data, () => history.push('/admin/discount'))
  }

  render() {
    // console.log(DiscountCodeForm)
    return (
      <AdminLayout1 headings='Add promotion code'>
        <AdminHeadings>
          <h2>Edit Discount Code </h2>
        </AdminHeadings>
        <Row className='mt-3'>
          <Col>
            <EditDiscountCodeForm
              initialValues={this.props.code}
              onSubmit={this.submit.bind(this)} />
          </Col>
        </Row>
      </AdminLayout1>
    )
  }
}

const mapStateToProps = ({ code }) => {
  const { singleCode } = code
  return { code: singleCode }
}

export default connect(mapStateToProps, { fetchCodeById, editCode })(EditDiscountCode)
