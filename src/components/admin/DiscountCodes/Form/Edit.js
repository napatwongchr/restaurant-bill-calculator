import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { arrayPush, change, arrayInsert } from 'redux-form'

import { fetchCodeById, editCode, addExtra } from 'actions/Codes'

import { DiscountCodesFormEdit } from 'components/Admin/DiscountCodes/Form/Form'

class DiscountCodesEdit extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  componentDidMount() {
    const {
      fetchCodeById,
      match: { params }
    } = this.props
    fetchCodeById(+params.codeId)
    this.handleClickExtra = this.handleClickExtra.bind(this)
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

  handleClickExtra() {
    this.props.change('editDiscountCodeForm', 'extra', 'ok')
  }

  render() {
    const { code } = this.props
    return (
      <div>
        <DiscountCodesFormEdit
          buttonText="Update"
          initialValues={code}
          onSubmit={this.submit}
        />
        <button onClick={this.handleClickExtra}>Add extra</button>
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
    { fetchCodeById, editCode, addExtra, change }
  )(DiscountCodesEdit)
)
