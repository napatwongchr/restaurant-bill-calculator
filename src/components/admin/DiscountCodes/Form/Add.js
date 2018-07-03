import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { addCode } from 'actions/Codes'

import { DiscountCodesFormAdd } from 'components/Admin/DiscountCodes/Form/Form'

class DiscountCodesAdd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      discountType: 'default'
    }
  }

  submit(values) {
    const { addCode, history, codes } = this.props
    addCode(values, codes.length, () => history.push('/admin/discount-codes'))
  }

  handleSelect(event) {
    this.setState({ discountType: event.target.value })
  }

  render() {
    return (
      <div>
        <DiscountCodesFormAdd
          buttonText="Add"
          onSubmit={this.submit.bind(this)}
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
  connect(
    mapStateToProps,
    { addCode }
  )(DiscountCodesAdd)
)
