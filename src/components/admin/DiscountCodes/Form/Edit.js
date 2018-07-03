import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCodeById, editCode } from 'actions/Codes'

import { DiscountCodesFormEdit } from 'components/Admin/DiscountCodes/Form/Form'

class DiscountCodesEdit extends Component {
  componentDidMount() {
    const {
      fetchCodeById,
      match: { params }
    } = this.props
    fetchCodeById(+params.codeId)
  }

  submit(values) {
    const {
      history,
      editCode,
      match: { params }
    } = this.props
    const data = { id: +params.codeId, values }
    editCode(data, () => history.push('/admin/discount-codes'))
  }

  render() {
    const { code } = this.props
    return (
      <div>
        <DiscountCodesFormEdit
          buttonText="Update"
          initialValues={code}
          onSubmit={this.submit.bind(this)}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ code }) => {
  const { singleCode } = code
  return { code: singleCode }
}

export default withRouter(
  connect(
    mapStateToProps,
    { fetchCodeById, editCode }
  )(DiscountCodesEdit)
)
